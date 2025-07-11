<script lang="ts">
  export let voice: { name: string; url: string };

  let audio: HTMLAudioElement;
  let isPlaying = false;

  function toggle() {
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  function onPlay() {
    isPlaying = true;
  }
  function onPause() {
    isPlaying = false;
  }
</script>

<div
  class="flex items-center gap-2 rounded-xl border border-gray-100 px-4 py-2"
>
  <button
    class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-800"
    on:click={toggle}
    aria-label={isPlaying ? `Pause ${voice.name}` : `Play ${voice.name}`}
  >
    {#if isPlaying}
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="3" width="4" height="14" fill="currentColor" />
        <rect x="12" y="3" width="4" height="14" fill="currentColor" />
      </svg>
    {:else}
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="4,3 17,10 4,17" fill="currentColor" />
      </svg>
    {/if}
  </button>
  <span class="font-lexend text-sm font-medium text-gray-700">{voice.name}</span
  >
  <audio bind:this={audio} src={voice.url} on:play={onPlay} on:pause={onPause}
  ></audio>
</div>
