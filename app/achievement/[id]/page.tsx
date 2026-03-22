import ClientPage from "./ClientPage"

const problems = [
  { id: '1', title: 'Palindrome String', desc: '...' },
  { id: '2', title: 'Maximum Element in Array', desc: '...' },
  { id: '3', title: 'Minimum Element in Array', desc: '...' },
]

// 1. Update generateMetadata to await params and searchParams
export async function generateMetadata({ params, searchParams }: { 
  params: Promise<{ id: string }>, 
  searchParams: Promise<{ score?: string }> 
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const problem = problems.find((p) => p.id === resolvedParams.id) || problems[0];
  const score = resolvedSearchParams.score || '0';

  return {
    title: `Solved ${problem.title}`,
    description: `Earned ${score} XP`,
    openGraph: {
      title: `Solved ${problem.title}`,
      images: [`https://my-app-eosin-nine-63.vercel.app/api/og?title=${encodeURIComponent(problem.title)}&score=${score}`],
    },
  }
}

// 2. Update the Page component to be async and await params
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ClientPage id={id} />
}