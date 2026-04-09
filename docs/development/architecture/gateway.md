# Gateway Architecture

The Gateway is OpenClaw's WebSocket control plane.

## Overview

The Gateway exposes a WebSocket API for real-time agent control.

## Protocol

### Connection
```javascript
ws://host:port/gateway
```

### Message Format
```json
{
  "id": "uuid",
  "kind": "agentTurn|systemEvent|...",
  "payload": { ... }
}
```

### Message Types

| Kind | Description |
|------|-------------|
| `agentTurn` | Execute agent with message |
| `systemEvent` | Inject system event |
| `toolCall` | Execute tool |
| `toolResult` | Tool execution result |

## Session Management

- Sessions are identified by unique UUIDs
- Each session has its own context
- History is maintained per session

## Security

- Token-based authentication
- Allowlist-based tool execution
- Rate limiting per session