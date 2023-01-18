// chant.js
// async loading for Audio
// by Chroma
// 17 Jan 2023

// important Audio methods: play, pause, volume, loop, playbackRate, muted, autoplay

// static class
export default class Chant {
  static bundles = {};

  static addBundle(bundle, sources) {
    this.bundles[bundle] = sources;
  }

  static async loadBundle(bundleKey) {
    const sounds = {};
    const bundle = this.bundles[bundleKey];
    for (const key in bundle) {
      sounds[key] = await this.loadAsync(bundle[key]);
    }
    delete this.bundles[bundleKey];
    return sounds;
  }

  static async loadAsync(src) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.oncanplaythrough = () => { resolve(audio); }
      audio.onerror = () => { reject(`Invalid audio source: ${src}`); }
      audio.src = src;
    })
  }
}
