Taken from https://cheatography.com/sertalpbilal/cheat-sheets/fpl-api-endpoints/

| Endpoint | Description |
|----------|-------------|
| `https://fantasy.premierleague.com/api/bootstrap-static/` | Main URL for all player IDs, team IDs, team strength, gameweek deadlines |
| `https://fantasy.premierleague.com/api/fixtures/` | Fixture of all the games |
| `https://fantasy.premierleague.com/api/fixtures/?event=GW` | Fixture of game for specific GW |
| `https://fantasy.premierleague.com/api/event/GW/live/` | Live results of given GW (GW should be numeric) |
| `https://fantasy.premierleague.com/api/entry/TID/` | General info about team TID (name, manager, kit colors, leagues joined) |
| `https://fantasy.premierleague.com/api/entry/TID/history/` | This season and previous season performance of given team TID |
| `https://fantasy.premierleague.com/api/entry/TID/transfers/` | All transfers of given team TID |
| `https://fantasy.premierleague.com/api/entry/TID/event/GW/picks/` | Squad picks of team TID for week GW (TID and GW should be numeric) |
| `https://fantasy.premierleague.com/api/leagues-classic/LID/standings/` | Information about league with id LID (name and standings) |
| `https://fantasy.premierleague.com/api/leagues-classic/LID/standings/?page_standings=P` | Page P for leagues LID with more than 50 teams |
| `https://fantasy.premierleague.com/api/element-summary/EID/` | Details of player EID (fixtures with FDR, current season details, previous season summary) |
| `https://fantasy.premierleague.com/api/regions/` | FPL Region List |
| `https://fantasy.premierleague.com/api/stats/best-classic-private-leagues/` | List of best leagues |
