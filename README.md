### [Live Demo](tarotcolor.com)
### This repository represents the new version that is under development. [Here](https://github.com/rynmgdlno/tarotv3) is the old version which is currently live. The implementation of Redux as well as more thoughtful React composition and project organzation meant it was much easier to re-write from the ground up.

# Tarot - The Keyword Based Color Palette Generator

Generate conceptual color palettes for any project where you might want a color scheme!
Renovating the bathroom with a coastal theme? Try "mediterranean" or "big sur".
Building a Star Wars fan site? Try "Mandalorian".
The results can be surprisingly accurate or hilariously off the wall.

Tarot works by utilizing the Flickr API to query images, gather color data from said images (in the backend which you can find [here](https://github.com/rynmgdlno/TarotBackend)), and return that as hex and rgb color codes. 

## How it's made 

This project was built with React, vanilla CSS/SASS, and Firebase for user auth and saving of palettes.

Currently state management is handled solely with component based state, mostly functional hooks and one quite large class component in the "Tarot" page component. This was intended as an exercise to see just how convoluted sticking to component based state management can become (prop drilling masterpiece), and to help myself learn redux in the process of converting it over.

## Planned Updates

This is a work in progress.  
Current task:
- Finish user menu form validations and testing newly written firebase functions. 

Remaining tasks:
- Saved palette browser.
- Save palette modal.
- Rewrite API calls and search result logic for Redux.
- Tutorial / Guide mode. 
- Tablet / Desktop Styles.
- Modify backend API to no longer return hex codes (now handled solely in the client)
- Optimize backend API.


