import {
  getBootstrapStatic,
  getFixtures,
  getElementSummary,
  getEntry,
  getFixturesForGameweek,
  getLiveEvent,
  getEntryHistory,
  getEntryTransfers,
  getEntryPicks,
  getLeagueStandings,
  getLeagueStandingsPage,
  getRegions,
  getBestClassicPrivateLeagues
} from './fpl.js';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import z from 'zod';
import { FplApiObject } from './types.js';

// MCP server setup (basic example)
const server = new McpServer({
  name: "fpl-api",
  version: "1.0.0"
}); 

// Tool for fixtures for a specific gameweek
server.registerTool("getFixturesForGameweek", {
  title: "Get Fixtures For Gameweek",
  description: "Fetch fixtures for a specific gameweek",
  inputSchema: { gw: z.number() }
}, async ({ gw }) => {
  const data = await getFixturesForGameweek(gw);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for live results of a gameweek
server.registerTool("getLiveEvent", {
  title: "Get Live Event",
  description: "Fetch live results for a given gameweek",
  inputSchema: { gw: z.number() }
}, async ({ gw }) => {
  const data = await getLiveEvent(gw);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for entry history
server.registerTool("getEntryHistory", {
  title: "Get Entry History",
  description: "Fetch this and previous season performance of a team",
  inputSchema: { entryId: z.number() }
}, async ({ entryId }) => {
  const data = await getEntryHistory(entryId);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for entry transfers
server.registerTool("getEntryTransfers", {
  title: "Get Entry Transfers",
  description: "Fetch all transfers of a team",
  inputSchema: { entryId: z.number() }
}, async ({ entryId }) => {
  const data = await getEntryTransfers(entryId);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for entry picks for a week
server.registerTool("getEntryPicks", {
  title: "Get Entry Picks",
  description: "Fetch squad picks of a team for a specific week",
  inputSchema: { entryId: z.number(), gw: z.number() }
}, async ({ entryId, gw }) => {
  const data = await getEntryPicks(entryId, gw);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for league standings
server.registerTool("getLeagueStandings", {
  title: "Get League Standings",
  description: "Fetch information about a league by ID",
  inputSchema: { leagueId: z.number() }
}, async ({ leagueId }) => {
  const data = await getLeagueStandings(leagueId);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for paginated league standings
server.registerTool("getLeagueStandingsPage", {
  title: "Get League Standings Page",
  description: "Fetch a page of league standings for leagues with more than 50 teams",
  inputSchema: { leagueId: z.number(), page: z.number() }
}, async ({ leagueId, page }) => {
  const data = await getLeagueStandingsPage(leagueId, page);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for region list
server.registerTool("getRegions", {
  title: "Get Regions",
  description: "Fetch FPL region list",
  inputSchema: {}
}, async () => {
  const data = await getRegions();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for best leagues
server.registerTool("getBestClassicPrivateLeagues", {
  title: "Get Best Classic Private Leagues",
  description: "Fetch list of best classic private leagues",
  inputSchema: {}
}, async () => {
  const data = await getBestClassicPrivateLeagues();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});
// add a tool to call the getBootstrapStatic function
server.registerTool("getBootstrapStatic", {
  title: "Get Bootstrap Static",
  description: "Fetch static bootstrap data",
  inputSchema: {}
}, async () => {
  //need to be selective about what data to return here as it can easily exceed limits
  const data: FplApiObject = await getBootstrapStatic();
  const now = new Date();
  var returnObject: Partial<FplApiObject> = {
    events: data.events.filter(ev => {
      if (!ev.deadline_time) return false;
      return new Date(ev.deadline_time) < now;
    }),
    teams: data.teams,
    element_types: data.element_types,
    elements: data.elements.map(el => ({
      id: el.id,
      web_name: el.web_name,
      element_type: el.element_type,
      team: el.team,
      code: el.code,
      total_points: el.total_points,
      selected_by_percent: el.selected_by_percent,
    })),
    chips: data.chips,
  };
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(returnObject)
      }
    ]
  };
});

// Tool for fixtures
server.registerTool("getFixtures", {
  title: "Get Fixtures",
  description: "Fetch all FPL fixtures",
  inputSchema: {}
}, async () => {
  const data = await getFixtures();
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for element-summary
server.registerTool("getElementSummary", {
  title: "Get Element Summary",
  description: "Fetch details for a specific player (element)",
  inputSchema: { elementId: z.number() }
}, async ({ elementId }) => {
  const data = await getElementSummary(elementId);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Tool for entry (team info)
server.registerTool("getEntry", {
  title: "Get Entry",
  description: "Fetch general info about a team by entry ID",
  inputSchema: { entryId: z.number() }
}, async ({ entryId }) => {
  const data = await getEntry(entryId);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data)
      }
    ]
  };
});

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
