# OpenClaw Debugging Guide

Common debugging techniques for OpenClaw development.

## Logging

### Enable Debug Logs
```bash
# Set log level
OPENCLAW_LOG=debug pnpm start

# Or in config
logging:
  level: debug
```

### Key Log Files
- Gateway logs: `~/.openclaw/logs/gateway/`
- Extension logs: Check individual extension directories

## Common Issues

### Gateway Connection
```bash
# Check gateway status
openclaw gateway status

# View logs
tail -f ~/.openclaw/logs/gateway/*.log
```

### Extension Loading
```bash
# List loaded extensions
openclaw extensions list

# Check extension logs
~/.openclaw/logs/extensions/<name>.log
```

### Channel Issues
```bash
# Test channel connection
openclaw channel test <channel-name>
```

## Debugging Tools

### Browser DevTools
```bash
openclaw browser start # Then use DevTools
```

### VS Code
- Use built-in debugger
- Set breakpoints in `src/`

## Tips

1. Start with `--verbose` flag for detailed output
2. Use `console.log` sparingly in core code
3. Check `docs/debug/` for more guides