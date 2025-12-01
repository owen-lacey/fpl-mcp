# FPL MCP Server

A Model Context Protocol (MCP) server for the Fantasy Premier League API.

## Installation

### Install from NPM (Recommended)

```sh
npm install -g fpl-mcp
```

### Install from Source

```sh
git clone https://github.com/owen-lacey/fpl-mcp.git
cd fpl-mcp
npm install
npm run build
```

## Quick Start

### Using with Claude Desktop

If installed via NPM, add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fpl-api": {
      "command": "npx",
      "args": ["fpl-mcp@latest"]
    }
  }
}
```

If installed from source, use:

```json
{
  "mcpServers": {
    "fpl-api": {
      "command": "node",
      "args": ["/path/to/fpl-mcp/build/src/server.js"]
    }
  }
}
```

### Inspect the MCP tools
Use the Model Inspector to explore available tools:
```sh
npx @modelcontextprotocol/inspector npx fpl-mcp
```

## Usage Example

You can connect this MCP server to Claude Desktop and interact with FPL data using natural language.

![Screenshot of Claude Desktop using FPL MCP server](docs/claude-screenshot.png)

---

## Endpoints Supported
See `docs/fpl-api-cheatsheet.md` for all FPL API endpoints exposed as MCP tools.


---

## Example Prompts

Use these prompts to interact with the MCP server via your LLM:

- "Show me the fixtures for gameweek 5."
- "How am I doing in my private leagues (team id is 12345)?"
- "How did mo salah get on in GW1?"

You can ask natural language questions about any supported endpoint. The LLM will use the appropriate MCP tool to fetch the data.

---

## Development

### Publishing to npm

This repository includes a GitHub Actions workflow that automatically publishes to npm when the version number in `package.json` changes.

#### Setup

1. Create an npm access token:
   - Log in to [npmjs.com](https://www.npmjs.com/)
   - Go to Access Tokens in your account settings
   - Generate a new "Automation" token

2. Add the token to GitHub Secrets:
   - Go to your repository Settings > Secrets and variables > Actions
   - Create a new secret named `NPM_TOKEN`
   - Paste your npm token as the value

3. Publish a new version:
   - Update the version in `package.json` (e.g., `1.0.1` → `1.0.2`)
   - Commit and push to the `main` branch
   - The workflow will automatically build and publish to npm
   - A git tag (e.g., `v1.0.2`) will be created automatically

---

## License
MIT

