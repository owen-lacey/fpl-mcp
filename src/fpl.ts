export async function getFixturesForGameweek(gw: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/fixtures/?event=${gw}`);
  return res.json();
}

async function fetchLiveEventRaw(gw: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/event/${gw}/live/`);
  return res.json();
}

export async function getLiveEvent(gw: number, elementIds?: number[]): Promise<any> {
  const data = await fetchLiveEventRaw(gw);

  // Filter elements if specific IDs requested
  let elements = data.elements || [];
  if (elementIds && elementIds.length > 0) {
    elements = elements.filter((element: any) => elementIds.includes(element.id));
  }

  // Return only essential stats for each player
  const focusedElements = elements.map((element: any) => ({
    id: element.id,
    stats: {
      minutes: element.stats.minutes,
      goals_scored: element.stats.goals_scored,
      assists: element.stats.assists,
      clean_sheets: element.stats.clean_sheets,
      goals_conceded: element.stats.goals_conceded,
      own_goals: element.stats.own_goals,
      penalties_saved: element.stats.penalties_saved,
      penalties_missed: element.stats.penalties_missed,
      yellow_cards: element.stats.yellow_cards,
      red_cards: element.stats.red_cards,
      saves: element.stats.saves,
      bonus: element.stats.bonus,
      bps: element.stats.bps,
      influence: element.stats.influence,
      creativity: element.stats.creativity,
      threat: element.stats.threat,
      ict_index: element.stats.ict_index,
      starts: element.stats.starts,
      expected_goals: element.stats.expected_goals,
      expected_assists: element.stats.expected_assists,
      expected_goal_involvements: element.stats.expected_goal_involvements,
      expected_goals_conceded: element.stats.expected_goals_conceded,
      total_points: element.stats.total_points,
    }
  }));

  return {
    elements: focusedElements
  };
}

export async function getEntryHistory(entryId: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/history/`);
  return res.json();
}

export async function getEntryTransfers(entryId: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/transfers/`);
  return res.json();
}

export async function getEntryPicks(entryId: number, gw: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/event/${gw}/picks/`);
  return res.json();
}

export async function getLeagueStandings(leagueId: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`);
  return res.json();
}

export async function getLeagueStandingsPage(leagueId: number, page: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_standings=${page}`);
  return res.json();
}

export async function getRegions(): Promise<any> {
  const res = await fetch('https://fantasy.premierleague.com/api/regions/');
  return res.json();
}

export async function getBestClassicPrivateLeagues(): Promise<any> {
  const res = await fetch('https://fantasy.premierleague.com/api/stats/best-classic-private-leagues/');
  return res.json();
}
import fetch from 'node-fetch';
import { FplApiObject } from './types.js';

export async function getBootstrapStatic(): Promise<FplApiObject> {
  const res = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
  return res.json() as Promise<FplApiObject>;
}

export async function getPlayerData(): Promise<Partial<FplApiObject>> {
  const data = await getBootstrapStatic();
  return {
    elements: data.elements,
  };
}

export async function getTeamData(): Promise<Partial<FplApiObject>> {
  const data = await getBootstrapStatic();
  return {
    teams: data.teams,
  };
}

export async function getGameweekData(): Promise<Partial<FplApiObject>> {
  const data = await getBootstrapStatic();
  return {
    events: data.events,
  };
}

export async function getChipData(): Promise<Partial<FplApiObject>> {
  const data = await getBootstrapStatic();
  return {
    chips: data.chips,
  };
}

export async function getFixtures(): Promise<any> {
  const res = await fetch('https://fantasy.premierleague.com/api/fixtures/');
  return res.json();
}

export async function getElementSummary(elementId: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/element-summary/${elementId}/`);
  return res.json();
}

export async function getEntry(entryId: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/`);
  return res.json();
}
