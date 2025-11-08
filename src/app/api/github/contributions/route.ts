import { NextResponse } from 'next/server';

type ContributionCalendarDay = {
  date: string;
  contributionCount: number;
  color: string;
};

type ContributionCalendarWeek = {
  contributionDays: ContributionCalendarDay[];
};

type GitHubCalendarResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: ContributionCalendarWeek[];
        };
      };
    };
  };
  errors?: unknown;
};

const CONTRIBUTIONS_QUERY = `
  query Contributions($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

const GITHUB_LOGIN = 'zach1020';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { login: GITHUB_LOGIN },
      }),
      next: { revalidate: 60 * 60 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data: GitHubCalendarResponse = await response.json();

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return NextResponse.json(
        { error: 'Failed to fetch contribution data' },
        { status: 500 }
      );
    }

    const calendar =
      data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: 'Unexpected response shape from GitHub' },
        { status: 500 }
      );
    }

    const weeks = calendar.weeks.map((week) => ({
      contributionDays: week.contributionDays.map((day) => ({
        date: day.date,
        contributionCount: day.contributionCount,
        color: day.color,
      })),
    }));

    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks,
    });
  } catch (error) {
    console.error('Error fetching contribution data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contribution data' },
      { status: 500 }
    );
  }
}

