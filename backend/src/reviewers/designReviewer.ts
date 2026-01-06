import { queryLLM } from "../llm/ollamaClient";
import { generatePrompt } from "../prompt/systemDesignPrompt";

export const reviewers = [
  "Scalability",
  "Reliability",
  "Cost",
  "Security",
  "Tradeoffs"
] as const;

export type ReviewerType = typeof reviewers[number];

export async function reviewDesign(design: string) {

  const results = await Promise.all(
  reviewers.map(r => queryLLM(generatePrompt(design, r)))
);


  return results;
}
