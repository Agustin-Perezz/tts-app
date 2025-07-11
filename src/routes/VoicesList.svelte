<script lang="ts">
  import VoiceExample from '../lib/components/VoiceExample.svelte';

  const voices = [
    {
      name: 'Wyatt',
      url: '/audio/voice_preview_wyatt- wise rustic cowboy.mp3'
    },
    { name: 'Oracle X', url: '/audio/voice_preview_oracle x.mp3' },
    {
      name: 'Grandpa Spuds',
      url: '/audio/voice_preview_grandpa spuds oxley.mp3'
    },
    { name: 'Arabella', url: '/audio/voice_preview_arabella.mp3' }
  ];
</script>

<div
  class="absolute bottom-[-20px] left-34 z-10 flex flex-row justify-center gap-4 overflow-x-auto"
>
  {#each voices as voice (voice.name)}
    <VoiceExample {voice} />
  {/each}
</div>
