# Hoops Training Plan: project notes

## What the app is for
A basketball training app for players and their coaches. It shows a weekly training plan and a library of drills.

## Main screens
- **Home** (`/`): intro and links to the weekly plan and drills.
- **Weekly plan** (`#/plan`): one card per day (Monday to Sunday) with a focus and a list of drills. "Mark done" ticks a day off and shows how many days are done.
- **Drills** (`#/drills`): drill library with category filters (All, Shooting, Dribbling, Defense, Conditioning) and a "Star drill" toggle.

## API endpoints
None yet. All content is sample data written into the screens.

## Screens that work without saving (trial)
- Weekly plan: "Mark done" ticks. Lost on reload. Show the label "Not saved yet: upgrade to keep your changes". To switch to real saving after the upgrade, store the done days in the database.
- Drills: "Star drill" toggles. Lost on reload. Same label. To switch to real saving, store starred drills per user.

## Decisions
- First version: sample plan and drill content, no sign-in, no backend data yet.
- Pages use HashRouter (react-router-dom), so each page has its own address.
