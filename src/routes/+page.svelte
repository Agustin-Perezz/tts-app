<script lang="ts">
  import Background from '$lib/components/Background.svelte';
  import Tts from './Tts.svelte';
</script>

<div class="relative min-h-screen w-full bg-[#f8fafc]">
  <Background />
  <div
    class="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-white sm:p-8"
  >
    <Tts />
  </div>
</div>
