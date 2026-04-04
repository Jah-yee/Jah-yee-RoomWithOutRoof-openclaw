# Issue #61011: Tool execution fails silently

## Problem Summary

When using Kimi k2.5 model (kimi/k2p5), the model generates tool intent text ("Let me do that...", "Writing it now...") but no tool is actually invoked. No error, no result - just silent failure.

## Analysis Notes

### Suspected Areas (needs verification)

1. **Tool name parsing**: Check if Kimi returns tool_use in compatible format
   - File: `src/agents/anthropic-transport-stream.ts`
   - Function: `fromClaudeCodeName()` - validates tool names against context.tools

2. **Stop reason handling**: Verify `stopReason` is set to `toolUse` when model requests tool call
   - File: `src/agents/anthropic-transport-stream.ts`
   - Maps `tool_use` stop reason to `toolUse`

3. **Response parsing**: Check if pendingToolCalls are extracted correctly
   - File: `src/gateway/openresponses-http.ts`
   - Function: `resolveStopReasonAndPendingToolCalls()`

### Test Hypothesis

This could be a model-provider-specific issue where the model outputs tool calls but they're filtered/dropped before execution.

## Steps to Reproduce

1. Use Kimi k2.5 model (kimi/k2p5)
2. Ask for tool execution: "run date command" or "write a file"
3. Model responds with intent text but no tool executes

## Expected Fix

- Either: Tool calls should execute and return results
- Or: Clear error message if tools unavailable
