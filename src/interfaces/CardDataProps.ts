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
  typeProject: string[];
  proto?: string;
  repo: string;
}