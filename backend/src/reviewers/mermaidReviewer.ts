import { queryLLM } from "../llm/ollamaClient";

export async function generateMermaidDiagram(design: string) {
  const prompt = `
You must ONLY output valid Mermaid syntax.
DO NOT add explanations.
DO NOT use markdown.
DO NOT wrap in backticks.

Format example:
graph LR
A[Client] --> B[Server]

Now generate a Mermaid diagram for this system design:

${design}

`;

  const diagram = await queryLLM(prompt);
  return diagram.trim();
}
