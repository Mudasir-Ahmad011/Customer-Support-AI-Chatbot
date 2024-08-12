import { anthropic } from "@ai-sdk/anthropic";
import { ollama } from "ollama-ai-provider";
import { openai } from "@ai-sdk/openai";
import { vertex } from "@ai-sdk/google-vertex";
import { createEdgeRuntimeAPI } from "@assistant-ui/react/edge";
 
export const { POST } = createEdgeRuntimeAPI({
  model: vertex("gemini-1.5-pro"),
});
    