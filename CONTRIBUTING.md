# Contributing to Shodan for Raycast

Thank you for your interest in contributing to Shodan for Raycast! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm
- [Raycast](https://raycast.com/) installed on macOS
- A Shodan API key (get one at [shodan.io](https://shodan.io))

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/owanesh/shodan_raycast.git
   cd shodan_raycast
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development mode:
   ```bash
   npm run dev
   ```
   This will load the extension in Raycast with hot-reload enabled.

4. Configure your Shodan API key in Raycast's extension preferences.

## Project Structure

```
src/
├── commands/           # Raycast commands (main entry points)
├── api/               # API client, types, and error handling
│   ├── client.ts      # Singleton ShodanClient with caching
│   ├── types.ts       # TypeScript interfaces
│   └── errors.ts      # Custom error classes
├── hooks/             # React hooks for data fetching
├── components/        # Reusable React components
├── utils/             # Utility functions
└── data/              # Static data (presets, filters)
```

## Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development mode with hot-reload |
| `npm run build` | Build the extension for production |
| `npm run lint` | Run ESLint checks |
| `npm run lint -- --fix` | Auto-fix linting issues |

### Code Style

This project uses TypeScript with strict mode enabled. Before committing:

1. Run `npm run lint -- --fix` to auto-fix formatting issues
2. Ensure `npm run lint` passes without errors
3. Follow existing naming conventions:
   - **Components**: PascalCase (`HostDetailView.tsx`)
   - **Hooks**: camelCase with `use` prefix (`useShodanSearch.ts`)
   - **Utilities**: kebab-case (`query-suggestions.ts`)
   - **Constants**: UPPER_SNAKE_CASE (`PRESET_QUERIES`)

### TypeScript Guidelines

- Use strict typing; avoid `any` when possible
- Define interfaces in `src/api/types.ts` for API responses
- Add type annotations for function parameters and return values

## Adding New Features

### New API Endpoint

1. Add the method to `ShodanClient` class in `src/api/client.ts`
2. Define TypeScript interfaces in `src/api/types.ts`
3. Create a hook in `src/hooks/` if needed for data fetching
4. Handle errors appropriately using custom error classes

### New Command

1. Create a new file in `src/commands/` (e.g., `src/commands/my-feature.tsx`)
2. Use existing hooks for data fetching
3. Implement `ActionPanel` for keyboard interactions
4. Register the command in `package.json` under the `commands` array

### New Preset Queries

Add entries to `src/data/presets.ts` following the existing format:
```typescript
{
  id: "unique-id",
  name: "Query Name",
  query: "shodan query string",
  description: "What this query finds",
  category: "Category Name",
}
```

## Commit Guidelines

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use Case |
|--------|----------|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation changes |
| `style:` | Code style changes (formatting, etc.) |
| `refactor:` | Code refactoring |
| `chore:` | Maintenance tasks |
| `hotfix:` | Emergency patches |

Examples:
```
feat: add DNS lookup command
fix: resolve rate limiting issue in search
docs: update README with new features
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines above
3. Ensure all linting passes (`npm run lint`)
4. Test your changes manually in Raycast
5. Update `CHANGELOG.md` if adding user-facing changes
6. Submit a pull request with a clear description

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Linting passes without errors
- [ ] Changes have been tested in Raycast
- [ ] CHANGELOG.md updated (if applicable)
- [ ] New features have appropriate error handling

## Testing

Currently, testing is done manually:

1. Run `npm run dev` to load the extension
2. Test each affected command in Raycast
3. Verify error handling with edge cases
4. Check caching behavior (search the same query twice)
5. Test with different Shodan plan types if possible

## Architecture Notes

### Caching

The API client implements caching to reduce API calls:
- Search results: 30-minute TTL, max 15 entries
- Host lookups: 30-minute TTL, max 30 entries
- API credits: 1-minute TTL

### Error Handling

Custom error classes in `src/api/errors.ts`:
- `ShodanError` - Base class
- `AuthenticationError` - Invalid API key
- `RateLimitError` - Rate limit exceeded
- `InsufficientCreditsError` - Not enough credits

Always show user-friendly toast notifications for errors.

### Feature Availability

Some features require paid Shodan plans. Use `PremiumFeatureNotice` component to indicate when features are unavailable.

## Resources

- [Shodan API Documentation](https://shodan.readthedocs.io/)
- [Raycast Developer Documentation](https://developers.raycast.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Questions?

If you have questions or need help, feel free to open an issue on the repository.
