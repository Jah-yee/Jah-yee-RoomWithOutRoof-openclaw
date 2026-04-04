# OpenClaw Testing Guide

This guide covers testing philosophy and patterns for OpenClaw development.

## Test Commands

### Fast Local Development
```bash
pnpm test:fast        # Fast unit tests (~30s)
```

### Full Test Suites
```bash
pnpm build && pnpm check && pnpm test      # Full test suite
pnpm test:extension <name>               # Test specific extension
pnpm test:extension --list                # List valid extension IDs
```

### Contract Tests
```bash
pnpm test:contracts                      # All contract tests
pnpm test:contracts:channels            # Channel contracts only
pnpm test:contracts:plugins             # Plugin contracts only
```

### Extension & Channel Tests
```bash
pnpm test:extensions                    # All extension tests
pnpm test:channels                     # All channel tests
```

## Test Configuration Files

- `vitest.config.ts` - Main configuration
- `vitest.unit.config.ts` - Unit tests
- `vitest.e2e.config.ts` - E2E tests
- `vitest.channels.config.ts` - Channel tests
- `vitest.extensions.config.ts` - Extension tests

## Testing Philosophy

1. **Write tests first** - TDD approach for bug fixes
2. **Test behavior, not implementation** - Focus on public APIs
3. **Keep tests fast** - Avoid network calls when possible
4. **Use contracts** - Ensure extension/plugin compatibility

## Coverage Guidelines

- Core gateway: 90%+ coverage expected
- Channels: Contract tests required
- Extensions: smoke tests + targeted coverage