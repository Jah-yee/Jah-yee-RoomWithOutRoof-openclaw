# Plugin/Extension Architecture

## Extension vs Plugin

- **Extensions**: Bundled with OpenClaw, in `extensions/` directory
- **Plugins**: Third-party, installed from npm or ClawHub

## Extension Structure

```
extensions/<name>/
├── index.ts              # Entry point
├── package.json         # Extension metadata
├── manifest.json         # OpenClaw-specific config
└── src/
    └── ...
```

## Plugin SDK Boundary

Extensions must import only from `openclaw/plugin-sdk/*`:

```typescript
// ✅ Good
import { defineChannel } from "openclaw/plugin-sdk/channel-setup";

// ❌ Bad - internal implementation detail
import { something } from "../../src/channels/internal";
```

## Creating an Extension

1. Create directory in `extensions/`
2. Add `manifest.json` with metadata
3. Implement entry point
4. Add tests

## Extension Types

| Type | Description |
|------|-------------|
| Channel | Communication adapter |
| Provider | Model/API provider |
| Tool | Custom tool |
| Skill | Reusable skill |