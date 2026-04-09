# OpenClaw Architecture

High-level system architecture and design principles.

## System Overview

OpenClaw is an AI agent framework with a modular architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                     Gateway                                  │
│              (WebSocket control plane)                      │
├──────────────┬──────────────┬──────────────┬─────────────────┤
│  Channels   │   Agents   │   Tools    │    Sessions     │
│ (Discord,   │  (Pi RPC   │ (Browser, │ (subagents,    │
│  Telegram,  │   mode)    │  Canvas)  │    history)    │
│   Feishu)   │           │          │                │
└──────────────┴──────────────┴──────────────┴─────────────────┘
```

## Core Components

### Gateway (`src/gateway/`)
- WebSocket server for real-time control
- Session management
- Message routing

### Channels (`src/channels/`)
- Communication adapters (Discord, Telegram, Feishu, etc.)
- Message parsing and formatting

### Agents (`src/agents/`)
- Sub-agent orchestration
- History management
- Context handling

### Tools (`src/tools/`)
- Browser automation
- File operations
- Shell execution

## Design Principles

1. **Modularity** - Clear boundaries between components
2. **Extensibility** - Plugin SDK for custom extensions
3. **Security** - Minimal privilege, allowlist-based execution
4. **Reliability** - Failure isolation and recovery

## See Also

- [Gateway Details](gateway.md)
- [Plugin Architecture](plugins.md)
- [Channel Patterns](channels.md)