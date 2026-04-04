# OpenClaw Development Guide

Welcome to OpenClaw development! This guide is for contributors working on the core codebase, plugins, extensions, or tooling.

## Quick Start

1. **Environment**: Node 22+, pnpm, macOS/Linux/WSL2
2. **Clone**: `git clone https://github.com/openclaw/openclaw.git`
3. **Install**: `pnpm install`
4. **Build**: `pnpm build`
5. **Test**: `pnpm test:fast`

## Architecture Overview

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

## Key Code Locations

| Component | Location | Entry Point |
|-----------|----------|------------|
| Gateway | `src/gateway/` | `src/gateway/server.ts` |
| Channels | `src/channels/` | `src/channels/channel-web.ts` |
| Plugin SDK | `src/plugin-sdk/` | `src/plugin-sdk/index.ts` |
| Extensions | `extensions/` | `extensions/<name>/index.ts` |
| CLI | `src/cli/` | `src/cli/*.ts` |

## Development Workflow

1. Check existing issues or discuss in Discord
2. Fork and branch
3. Make changes
4. Run relevant tests (see Testing Guide)
5. Submit PR (see Contributing Guide)

## Resources

- [Architecture](architecture/)
- [Testing Guide](testing.md)
- [Debugging Tips](debugging.md)