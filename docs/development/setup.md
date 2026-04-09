# Development Environment Setup

## Prerequisites

- Node.js 22+
- pnpm (latest)
- macOS / Linux / WSL2

## Clone and Install

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
```

## Build

```bash
pnpm build
```

## Run Locally

```bash
# Development mode
pnpm start

# With custom config
pnpm start --config ~/.openclaw/config.yaml
```

## Platform-Specific Notes

### macOS
- Requires Xcode command line tools
- For iOS app: Xcode 15+

### Linux
- Requires libwebkitgtk
- See `docs/platforms/linux.md` for dependencies

### Windows (WSL2)
- Use WSL2 for best experience
- See `docs/platforms/windows.md` for setup

## IDE Setup

### VS Code
- Use official OpenClaw VS Code extension
- Configure TypeScript path in `.vscode/settings.json`

## Useful Commands

```bash
pnpm build          # Build all packages
pnpm check          # Type check
pnpm test          # Run tests
pnpm lint          # Lint code
```