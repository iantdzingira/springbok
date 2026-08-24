# Springbok Travels & Tours — site handoff

Plain HTML/CSS/JS, no build step. Open `index.html` directly, or serve the
folder with any static server.

## File map
- `index.html` — Home
- `tours.html` — All 6 tours
- `activities.html` — 21 activities, filterable by category
- `about.html` — Story + Why Us
- `contact.html` — Contact form + info
- `style.css` — All styling. Colours/fonts/spacing are CSS variables at the
  top (`@layer tokens`) — change them there to re-theme the whole site.
- `script.js` — All interactivity (nav, modals, filtering, booking)
- `data.js` — All tour/activity/review content. **Edit this file to change
  prices, descriptions, or add/remove tours — nothing else needs to change.**

## Adding real photos
Every image on the site is a real `<img>` tag pointing at a specific path
in `images/`. Until a file exists there, a branded placeholder tile shows
automatically (no broken-image icons). To go live with real photography,
just save a file at the exact path already referenced — no code edits:

- `images/hero/home.jpg`, `tours.jpg`, `activities.jpg`, `about.jpg`, `contact.jpg`
- `images/hero/split-1.jpg`, `split-2.jpg`, `split-3.jpg` (homepage collage)
- `images/tours/<slug>.jpg` — 6 files, slugs are in `data.js`
- `images/activities/<slug>.jpg` — 21 files, slugs are in `data.js`

## Known placeholders / decisions made
- **Booking & contact forms have no backend.** Submitting either opens a
  pre-filled email to `springboktravelsandtours@gmail.com` in the visitor's
  email app. This works with zero setup, but if you'd rather have a proper
  backend (e.g. so bookings land even if the visitor has no email client
  configured), that's a small follow-up — a form service like Formspree, or
  a lightweight backend, would replace the `mailto:` logic in `script.js`.
- **Tour details modal** shows description + price only — itinerary and
  inclusions aren't listed, since I didn't have real, tour-by-tour details
  to publish accurately. It currently says these are confirmed directly
  with the traveller. Send me that detail per tour and I'll add it in.
- **Map embed** is centred on Victoria Falls generally, not a precise office
  pin — I don't have a street address to embed. Give me exact coordinates
  or a Google Maps link and I'll drop in the real pin.
- The stock photo URLs from your original data file were intentionally
  **not** hot-linked (per your instruction) — they may not be licensed for
  commercial use on your site.

## Fixed from the original template
- Removed a duplicated `#confirmation-modal` block (was breaking bookings)
- Added the booking flow to `activities.html`-adjacent pages consistently
- Fixed a missing mobile hamburger button
- Rebuilt the cascade using CSS `@layer` so tokens/base/components/pages
  don't fight each other on specificity