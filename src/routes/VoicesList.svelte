<script lang="ts">
  import VoiceExample from '../lib/components/VoiceExample.svelte';
  export let handleVoiceChange: (value: string) => void;

  let selectedVoice = 'YXpFCvM1S3JbWEJhoskW';

  const voices = [
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
      url: '/audio/voice_preview_grandpa.mp3',
      voiceId: 'NOpBlnGInO9m6vDvFkFC'
    },
    {
      name: 'Arabella',
      url: '/audio/voice_preview_arabella.mp3',
      voiceId: 'Z3R5wn05IrDiVCyEkUrK'
    }
  ];

  function handleVoiceSelection(voiceId: string) {
    selectedVoice = voiceId;
    handleVoiceChange(voiceId);
  }
</script>

<div
  class="absolute bottom-[-20px] left-34 z-10 flex flex-row justify-center gap-4 overflow-x-auto"
>
  {#each voices as voice (voice.name)}
    <VoiceExample
      {voice}
      onVoiceSelect={handleVoiceSelection}
      isSelected={selectedVoice === voice.voiceId}
    />
  {/each}
</div>
