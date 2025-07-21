import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  // First, get pinned repos to exclude them
  const pinnedQuery = `
    query {
      user(login: "zach1020") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
            }
          }
        }
      }
    }
  `;

  try {
    // Get pinned repos first
    const pinnedResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: pinnedQuery }),
    });

    if (!pinnedResponse.ok) {
      throw new Error(`GitHub API error: ${pinnedResponse.status}`);
    }

    const pinnedData = await pinnedResponse.json();
    const pinnedIds = pinnedData.data.user.pinnedItems.nodes.map((repo: { id: string }) => repo.id);

    // Now get all repos and filter out pinned ones
    const allReposQuery = `
      query {
        user(login: "zach1020") {
          repositories(first: 50, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
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
              createdAt
            }
          }
        }
      }
    `;

    const allReposResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: allReposQuery }),
    });

    if (!allReposResponse.ok) {
      throw new Error(`GitHub API error: ${allReposResponse.status}`);
    }

    const allReposData = await allReposResponse.json();
    
    if (allReposData.errors) {
      console.error('GraphQL errors:', allReposData.errors);
      return NextResponse.json(
        { error: 'Failed to fetch repositories' },
        { status: 500 }
      );
    }

    // Filter out pinned repos and get the first 9
    const recentRepos = allReposData.data.user.repositories.nodes
      .filter((repo: { id: string }) => !pinnedIds.includes(repo.id))
      .slice(0, 9)
      .map((repo: { id: string; name: string; description: string | null; url: string; homepageUrl: string | null; primaryLanguage: { name: string; color: string } | null; stargazerCount: number; updatedAt: string; createdAt: string }) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.url,
        homepage: repo.homepageUrl,
        language: repo.primaryLanguage?.name || 'Unknown',
        stargazers_count: repo.stargazerCount,
        updated_at: repo.updatedAt,
        created_at: repo.createdAt,
      }));

    return NextResponse.json(recentRepos);
  } catch (error) {
    console.error('Error fetching recent repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recent repositories' },
      { status: 500 }
    );
  }
} 