### [Live Demo](https://www.tarotcolor.com)
## ~~This repository represents the new version that is under development.~~
## This version is now live at the above link. There are still improvements to be made and features to add but time is short!

# Tarot - The Lexical Color Palette Generator

Generate conceptual color palettes for any project where you might want a color scheme.
Simply enter a search term and infinite results are browsable in seconds.
Swipe or use the arrow keys to browse generated palettes.
Tap/Click an individual color to edit it's RGB values.
Create an account to save palettes for later.

Tarot works by utilizing the Flickr API to query images, gather color data from said images (in the backend which you can find [here](https://github.com/rynmgdlno/TarotBackend)), and return that as hex and rgb color codes. 

## How it's made: 

This project was built with React, Redux, vanilla CSS/SASS, and Firebase for user auth and saving of palettes.

## Potential Future Features:
- Palette sharing via socials
- Alternate color modes for editor (CMYK, HSL...)
- Global Palette Editor (Saturation, warmth, luminosity...)
- Palette Explorer Browser (view other user's palettes)
- Switch from Flicker API to ? (as needed)

This is a work in progress.  
Current task:
- Taking a break

Remaining tasks:
- ~~Finish Palettes Browser Modal~~
- ~~Save Palette ~~
- Totorial Modal
- ~~Splash Screen~~
- Add loader spinners where applicable
- ~~Rewrite API calls and search result logic for Redux. ~~
- *Possible* Rewrite API in FastAPI.
- Modify backend API to no longer return hex codes (now handled solely in the client)
- Optimize backend API.


