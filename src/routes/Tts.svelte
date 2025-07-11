<script lang="ts">
  import { ttsStore } from '$lib/stores/tts';
  import TtsHeader from './TtsHeader.svelte';
  import AudioWaveform from '$lib/components/AudioWaveform.svelte';
  import VoicesList from './VoicesList.svelte';

  let text = $state('');
  let voiceId = $state('YXpFCvM1S3JbWEJhoskW');

  function handleVoiceChange(value: string) {
    voiceId = value;
  }

  function convertToSpeech() {
    ttsStore.convertToSpeech(text, voiceId);
  }
</script>

<div class="w-full max-w-4xl space-y-8">
  <TtsHeader />

  <div class="relative mb-0 w-full">
    <textarea
      bind:value={text}
      class="shadow-t-lg font-lexend text-md gradient-textarea h-64 w-full resize-none rounded-md border border-b-0 border-gray-100 p-6 font-light text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none"
      placeholder="Enter your text here..."
    ></textarea>
    <button
      onclick={convertToSpeech}
      disabled={$ttsStore.isLoading}
      aria-label="Convert text to speech"
      class="absolute right-4 bottom-4 rounded-full bg-gray-600 p-2 text-white transition-colors duration-200 hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
    <VoicesList {handleVoiceChange} />
  </div>

  {#if $ttsStore.error}
    <div class="mt-8 text-center text-red-400">{$ttsStore.error}</div>
  {/if}

  {#if $ttsStore.isLoading}
    <div class="mt-8 flex h-12 items-center justify-center">
      <div
        class="h-8 w-8 animate-spin rounded-full border-4 border-gray-600 border-t-transparent"
      ></div>
    </div>
  {:else if $ttsStore.audioUrl}
    <div class="mx-auto mt-10 max-w-md">
      <AudioWaveform audioUrl={$ttsStore.audioUrl} />
    </div>
  {/if}
</div>

<style>
  .gradient-textarea {
    background: linear-gradient(to bottom, white 0%, transparent 100%);
  }
</style>
