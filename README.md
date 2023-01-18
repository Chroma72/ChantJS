# ChantJS
A super simple way to preload audio files for use in web games.

Loading textures and audio always seems like a PITA when it comes to web games. So I created this simple JS script to take care of that.
As you can see it follows the KISS ethos of programming. Hope you find it useful.
-Chroma

```
import Chant from '/js/chant.mjs'

async function preloadAudio() {
  Chant.addBundle('sounds', {
    spinner: 'assets/sounds/spinner-0.ogg',
    horn: 'assets/sounds/party-horn-0.ogg',
    pop: 'assets/sounds/pop-0.ogg'
  })
  
  sounds = await Chant.loadBundle('sounds');
  console.log('Sounds preload complete.');
}

async init() {
  await preloadAudio();
  // do something else (load textures?)
  // do another something else (load sprites?)
  // startGame();
}

window.onload(preloadAudio());
```
