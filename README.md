# GitHub Pages Mobile Site (Auto-built)

## What I detected
- Title: My Mobile Site
- Subtitle: Replace images/audio/map/QR in /assets
- Map query: 35.6812,139.7671
- Cover: cover.jpg
- Gallery images: img1.jpg, img2.jpg, img3.jpg, img4.jpg, img5.jpg, img6.jpg, img7.jpg, img8.jpg
- QR image: pay-qr.png
- Audio: assets/audio1.m4a

## Deploy (GitHub Pages)
1) Create a **Public** repository on GitHub.
2) Upload all files in this folder (not the outer folder itself).
3) Repo **Settings → Pages** → **Source: Deploy from a branch**. Select your default branch (e.g., `main`) and folder `/` or `/root`. Save.
4) Wait for the build. Your site will be live at: `https://USERNAME.github.io/REPO/`.

## Replace assets
- Replace images in `/assets`, keep names.
- If you change the audio filename, update the `src` in `index.html` accordingly.
- To change the map, modify the `q=` parameter in the Google Maps iframe.
