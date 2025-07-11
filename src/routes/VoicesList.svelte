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
