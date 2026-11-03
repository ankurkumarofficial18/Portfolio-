# Ankur Kumar — Portfolio

A single-page portfolio built with **HTML, CSS, Tailwind CSS (CDN) and vanilla JavaScript** — no build step.

*Backend & Enterprise Software Developer | Oracle Technologies | Cloud & DevOps | AI Engineering*

## Structure

```
ankur-portfolio/
├── index.html
├── css/style.css
├── js/script.js              # CONFIG + all content data (edit here)
├── assets/
│   ├── icons/favicon.svg
│   ├── images/profile.jpg    # your portrait
│   ├── images/og-image.jpg   # social share image
│   └── resume/resume.pdf     # your CV (Download CV buttons)
└── README.md
```

## Edit your details

Open `js/script.js`:

- `CONFIG.github` / `CONFIG.linkedin` — replace the placeholders. Until you do, those links are hidden automatically (no dead links).
- `CONFIG.formEndpoint` — paste a Formspree / EmailJS URL to make the contact form really send. While empty, the form validates but tells visitors it isn't connected yet.
- `SKILLS`, `JOURNEY`, `ROADMAP` — plain arrays; change levels (`core`, `working`, `exploring`) or text freely.

To update your CV, replace `assets/resume/resume.pdf`.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Tailwind, fonts and the hero video load from the internet. If the video fails, the hero falls back to a plain dark background.

## Deploy

**GitHub Pages** — push to GitHub → Settings → Pages → Deploy from branch `main` / root.

**Vercel** — import the repo at vercel.com/new, framework preset *Other*, no build command, output directory `.`.

## Notes

- Skills are labelled Core / Working / Exploring — no invented percentages.
- Mouse-controlled video scrubbing is disabled when `prefers-reduced-motion` is set.
