export interface Voice {
  name: string;
  url: string;
  voiceId: string;
}

export const voices: Voice[] = [
  {
    name: 'Alice',
    url: '/audio/voice_preview_alice.mp3',
    voiceId: 'Xb7hH8MSUJpSbSDYk0k2'
  },
  {
    name: 'Oracle X',
    url: '/audio/voice_preview_oracle x.mp3',
    voiceId: '1hlpeD1ydbI2ow0Tt3EW'
  },
  {
    name: 'Grandpa Spuds',
    url: '/audio/voice_preview_grandpa spuds oxley.mp3',
    voiceId: 'NOpBlnGInO9m6vDvFkFC'
  },
  {
    name: 'Arabella',
    url: '/audio/voice_preview_arabella.mp3',
    voiceId: 'Z3R5wn05IrDiVCyEkUrK'
  }
];
