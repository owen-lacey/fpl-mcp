# FPL MCP Server

A Model Context Protocol (MCP) server for the Fantasy Premier League API.

## Quick Start

### 1. Install dependencies
```sh
npm install
```

### 2. Build the project
```sh
npm run build
```

### 3. Inspect the MCP tools
Use the Model Inspector to explore available tools:
```sh
npx @modelcontextprotocol/inspector node build/src/server.js
```

### 4. Use with Claude
You can connect this MCP server to Claude Desktop and interact with FPL data using natural language.

![Screenshot of Claude Desktop using FPL MCP server](docs/claude-screenshot-placeholder.png)

---

## Endpoints Supported
See `docs/fpl-api-cheatsheet.md` for all FPL API endpoints exposed as MCP tools.

---


## Claude desktop
In your `claude_desktop_config.json`:

```json
  ...
  "mcpServers": {
    "fpl-api": {
      "command": "node",
      "args": [
        "/path/to/fpl-mcp/build/src/server.js"
      ]
    }
  }
```

---

## Example Prompts

Use these prompts to interact with the MCP server via your LLM:

- "Show me the fixtures for gameweek 5."
- "How am I doing in my private leagues (team id is 12345)?"
- "How did mo salah get on in GW1?"

You can ask natural language questions about any supported endpoint. The LLM will use the appropriate MCP tool to fetch the data.

---

## License
MIT

