# Aadi's Pit Wall · F1 2026 Dashboard

A bold, single-page Formula 1 dashboard built with vanilla HTML, CSS, and JavaScript.
It presents a personalized 2026 season view with standings, calendar, race preview, countdown, ticker updates, and dark mode support.

## Preview

Main file: index.html

## Features

- Editorial-style hero section with animated typography
- Live-style ticker with repeated paddock data
- Next race spotlight with countdown timer
- Season calendar strip with current round highlighting
- Drivers and constructors tables with team color accents
- Paddock intel panel (podium + stories)
- Stats ribbon and personalized driver spotlight
- Dark mode toggle with persisted preference (localStorage)
- Responsive layout for desktop and mobile

## Tech Stack

- HTML5
- Modern CSS (custom properties, animations, responsive media queries)
- Vanilla JavaScript (DOM updates, timers, localStorage)

## Getting Started

1. Clone or download this repository.
2. Open the project folder.
3. Open index.html in your browser.

No build step or dependencies are required.

## Project Structure

- index.html: Complete app (markup, styling, and scripts in one file)

## Customization

You can quickly personalize the dashboard by editing values in index.html:

- Theme colors and team color tokens in the :root CSS block
- Driver and constructor rows in the standings sections
- Calendar rounds and winners in the calendar strip
- Countdown target date in the JavaScript block:
  - new Date('2026-05-03T20:00:00Z')
- Ticker feed items in the items array
- Personalized labels/text (name, favorite driver/team, notes)

## Accessibility Notes

- Includes semantic sectioning and readable contrast in both themes
- Dark mode toggle uses aria-label
- Consider adding reduced-motion handling if heavy animations are an issue for some users

## Deployment

This project is currently deployed on Vercel.

- Live URL: https://f1dashboard-murex.vercel.app/

Because it is a static site, it can also be hosted on other static platforms if needed.

## License

No license is currently defined.
If you plan to share publicly, add a LICENSE file (for example MIT).
