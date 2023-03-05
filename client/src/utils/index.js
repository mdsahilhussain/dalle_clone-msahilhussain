import { surpriseMePrompts } from "../constants";

export function getRandowPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandowPrompt(prompt);
  return randomPrompt;
}
