# STARDUST — A Little Universe For You

A responsive, dependency-free storybook galaxy experience. Built with semantic HTML, CSS, and browser-native JavaScript modules.

## Run locally

Open `index.html` in a local static server (for example, `python3 -m http.server 8000`) and visit `http://localhost:8000`. ES modules require a server in most browsers.

## Deploy to Netlify

Import this Git repository in Netlify. Use the repository root as the publish directory. `netlify.toml` already sets `publish = "."`; there is no build command or package installation.

## Experiences

- Cream storybook opening and expanding galaxy transition
- Canvas star field, destinations, and occasional catchable shooting stars
- Star discovery and a warm transmission
- Twelve shuffled, non-repeating Stardust Jar notes with a visible jiggle
- Seven interactive heart constellation notes
- Category-aware cosmic answers
- Star naming and final message
- Gift link creator: encodes names, reasons, and a private note in the URL, with validation and safe text rendering
- Accessible sound toggle; gentle synthesized effects begin only after the visitor interacts

The gift information is encoded, not encrypted. Anyone with the generated URL can read its contents. Avoid including sensitive information.
