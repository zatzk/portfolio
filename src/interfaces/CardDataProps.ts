type Tool = {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface CardDataProps {
  title: string;
  description: string;
  tools: Tool[];
  proto?: string;
  repo: string;
  sets: string[];
}