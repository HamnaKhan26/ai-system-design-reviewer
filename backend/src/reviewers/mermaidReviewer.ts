import { queryLLM } from "../llm/ollamaClient";

export async function generateMermaidDiagram(design: string) {
  const prompt = `
You are a software engineer. Translate the following system design into a simple
Mermaid flowchart. Include major components and data flow. Use syntax:

graph LR
ComponentA --> ComponentB

System Design:
${design}
`;

  const diagram = await queryLLM(prompt);
  return diagram.trim();
}
