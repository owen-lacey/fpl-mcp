export async function getFixturesForGameweek(gw: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/fixtures/?event=${gw}`);
  return res.json();
}

export async function getLiveEvent(gw: number): Promise<any> {
  const res = await fetch(`https://fantasy.premierleague.com/api/event/${gw}/live/`);
  return res.json();
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
