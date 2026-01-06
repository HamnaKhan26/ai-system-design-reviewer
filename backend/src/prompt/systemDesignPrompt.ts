export function generatePrompt(design: string, reviewer: string) {
  return `
You are a senior Staff Software Engineer reviewing a system design.

Reviewer Type: ${reviewer}

Your task:
- Identify missing components
- Call out scalability bottlenecks
- Suggest concrete improvements
- Be concise and critical

System Design:
${design}
`;
}
