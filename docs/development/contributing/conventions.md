# OpenClaw Code Conventions

Coding conventions beyond linting.

## General Principles

1. **Readability over cleverness** - Code is read more than written
2. **Consistency** - Follow existing patterns
3. **Comments** - Explain why, not what

## Code Style

### TypeScript

- Use explicit types for public APIs
- Use `type` for unions, `interface` for objects
- Avoid `any`

### Naming

- `camelCase` for variables/functions
- `PascalCase` for classes/types
- `SCREAMING_SNAKE_CASE` for constants

## File Organization

```
src/
├── component/
│   ├── index.ts      # Public API
│   ├── component.ts # Implementation
│   └── test.ts       # Tests
```

## Error Handling

- Use custom error classes
- Include context in errors
- Log before throwing

## Async Code

- Use `async/await` over promises
- Handle errors explicitly
- Avoid unhandled rejections

## Performance

- Lazy load when possible
- Cache expensive operations
- Use streams for large data

## Security

- Never log secrets
- Validate all inputs
- Use allowlists