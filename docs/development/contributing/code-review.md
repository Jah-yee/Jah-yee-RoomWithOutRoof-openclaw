# Code Review Guide

What to expect in code review for OpenClaw.

## Review Process

1. **AI Review** - Codex runs automatically
2. **Maintainer Review** - Core team reviews
3. **CI Checks** - All tests must pass

## What Reviewers Look For

### Correctness
- Does the code work as intended?
- Are edge cases handled?
- Are there any bugs?

### Design
- Does it fit the architecture?
- Is it extensible?
- Are boundaries clear?

### Testing
- Are tests included?
- Do tests cover the changes?
- Are contract tests updated if needed?

### Style
- Does it follow conventions?
- Is the code readable?
- Are comments helpful?

## Common Issues

- Missing tests
- Incomplete error handling
- Breaking changes without migration
- Performance regressions

## Getting Review

1. Ensure CI passes
2. Keep PRs small and focused
3. Respond to feedback promptly