<script lang="ts">
  import { ttsStore } from '$lib/stores/tts';
  import TtsHeader from './TtsHeader.svelte';

  let text = $state('');

  function convertToSpeech() {
    ttsStore.convertToSpeech(text);
  }
</script>

<div class="w-full max-w-4xl space-y-8">
  <TtsHeader />

  <div class="w-full">
    <textarea
      bind:value={text}
      class="h-64 w-full resize-none rounded-lg border border-gray-700 bg-gray-800 p-6 text-lg text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
      placeholder="Enter your text here..."
    ></textarea>
  </div>

  {#if $ttsStore.error}
    <div class="text-center text-red-400">{$ttsStore.error}</div>
  {/if}

  <div class="flex justify-center">
    <button
      onclick={convertToSpeech}
      disabled={$ttsStore.isLoading}
      class="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-600"
    >
      {$ttsStore.isLoading ? 'Converting...' : 'Convert to Speech'}
    </button>
  </div>

  {#if $ttsStore.audioUrl}
    <div class="mx-auto w-full max-w-md">
      <audio controls class="w-full">
        <source src={$ttsStore.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  {/if}
</div>
