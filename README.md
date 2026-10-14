# UX Design Practice Generator

A small app I built to give myself one UX design exercise a day. It picks a prompt, I design it, and I post the result on X as part of my Daily UX Practice series.

## What it does

- **One exercise a day.** The pick is seeded by the date, so it stays the same all day. If a prompt doesn't click, I can reroll it.
- **50 exercises across 7 categories:** Redesign, Accessibility, AI concept, Component, Micro UX, Product critique, and What if.
- **No repeats.** Exercises I've already done are skipped until a category runs out.
- **Everything I need to start.** Each exercise has a short brief, the challenge, two directions to try, a constraint, what it teaches, and a caption ready to post.
- **A log of my practice.** When I finish, I can save a link to the post and a quick reflection, and look back through my history.

## Built with

React, Vite, and Framer Motion on the front end, plus a tiny Express server that saves my history to a JSON file. If the server isn't running, the app keeps a backup in the browser and syncs it later.

## Run it locally

```bash
npm install
npm run dev
```

This starts the app and the history server (port 3001) together.

## See the results

My Daily UX Practice posts are on X: [@TylerKirkl69749](https://x.com/TylerKirkl69749)

More of my work: [tylerkirkland.com](https://tylerkirkland.com)
