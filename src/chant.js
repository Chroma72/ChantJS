// chant.js
// async loading for Audio
// by Chroma
// 17 Jan 2023

// important Audio methods: play, pause, volume, loop, playbackRate, muted, autoplay

// static class
export default class Chant {
  static bundles = {};

  constructor() {
    if (this instanceof Chant) {
      throw Error('Chant is a static class and cannot be instantiated.');
    }
  }

  static addBundle(bundle, sources) {
    this.bundles[bundle] = sources;
  }

  static async loadBundle(bundleKey) {
    const audios = {};
    const bundle = this.bundles[bundleKey];
    for (const key in bundle) {
      audios[key] = await this._loadAsync(bundle[key]);
    }
    delete this.bundles[bundleKey];
    return audios;
  }

  static async _loadAsync(src) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      resolve(audio);
      audio.onerror = () => { reject(`Invalid audio source: ${src}`); };
      audio.src = src;
    })
  }
}
