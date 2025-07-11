<script lang="ts">
  import VoiceExample from '../lib/components/VoiceExample.svelte';
  import { voices } from '../lib/voices';
  export let handleVoiceChange: (value: string) => void;

  let selectedVoice = 'YXpFCvM1S3JbWEJhoskW';

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
