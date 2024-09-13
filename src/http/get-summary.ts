type ISummary = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<ISummary> {
  const response = await fetch("http://localhost:3333/week");
  const data = await response.json();

  return data.summary;
}
