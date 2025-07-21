import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  const query = `
    query {
      user(login: "zach1020") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
                color
              }
              stargazerCount
              updatedAt
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return NextResponse.json(
        { error: 'Failed to fetch pinned repositories' },
        { status: 500 }
      );
    }

    const pinnedRepos = data.data.user.pinnedItems.nodes.map((repo: { id: string; name: string; description: string | null; url: string; homepageUrl: string | null; primaryLanguage: { name: string; color: string } | null; stargazerCount: number; updatedAt: string }) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.url,
      homepage: repo.homepageUrl,
      language: repo.primaryLanguage?.name || 'Unknown',
      stargazers_count: repo.stargazerCount,
      updated_at: repo.updatedAt,
    }));

    return NextResponse.json(pinnedRepos);
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pinned repositories' },
      { status: 500 }
    );
  }
} 