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
      url: '/audio/voice_preview_grandpa spuds oxley.mp3',
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
  class="mt-4 flex w-full flex-row justify-center gap-2 overflow-x-auto px-2 sm:absolute sm:bottom-[-20px] sm:left-0 sm:z-10 sm:mt-0 sm:gap-4"
>
  {#each voices as voice (voice.name)}
    <VoiceExample
      {voice}
      onVoiceSelect={handleVoiceSelection}
      isSelected={selectedVoice === voice.voiceId}
    />
  {/each}
</div>
