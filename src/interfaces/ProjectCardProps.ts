type Tool = {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}


export interface ProjectCardProps {
  title: string;
  description: string;
  tools: Tool[];
  proto?: string;
  repo: string;
  types: string[];
}
