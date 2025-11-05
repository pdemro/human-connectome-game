export const colorRegistry = {
  compromised: 'red',
  glitching: 'orange',
  region: 'blue',

  setCompromisedColor(color: string) {
    this.compromised = color;
  },

  setGlitchedColor(color: string) {
    this.glitching = color;
  },

  setRegionColor(color: string) {
    this.region = color;
  },
};
