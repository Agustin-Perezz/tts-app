<script lang="ts">
  import { onMount } from 'svelte';

  export let audioUrl: string | null = null;
  export let isPlaying = false;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let animationId: number;
  let audioContext: AudioContext;
  let analyser: AnalyserNode;
  let dataArray: Uint8Array;
  let source: AudioBufferSourceNode | MediaElementAudioSourceNode | null = null;
  let audioElement: HTMLAudioElement | null = null;

  const bars = 32;
  const barWidth = 3;
  const barSpacing = 2;
  const maxBarHeight = 36;

  function initAudio() {
    if (!audioUrl || !canvas) return;

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    audioContext = new AudioCtx();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    audioElement = new Audio(audioUrl);
    source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioElement.addEventListener('play', () => {
      isPlaying = true;
      animate();
    });

    audioElement.addEventListener('pause', () => {
      isPlaying = false;
      cancelAnimationFrame(animationId);
    });

    audioElement.addEventListener('ended', () => {
      isPlaying = false;
      // cancelAnimationFrame(animationId);
    });
  }

  function animate() {
    if (!isPlaying || !analyser || !ctx) return;

    animationId = requestAnimationFrame(animate);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerY = canvas.height / 2;
    const startX = 0;

    for (let i = 0; i < bars; i++) {
      const dataIndex = Math.floor((i / bars) * dataArray.length);
      const value = dataArray[dataIndex] || 0;
      const barHeight = (value / 255) * maxBarHeight;

      const x = startX + i * (barWidth + barSpacing);
      const y = centerY - barHeight / 2;

      ctx.fillStyle = '#a3a3a3';
      ctx.fillRect(x, y, barWidth, barHeight);
    }
  }

  function handlePlay() {
    if (audioElement) {
      audioElement.play();
    }
  }

  function drawPreview() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerY = canvas.height / 2;
    const startX = 0;
    for (let i = 0; i < bars; i++) {
      const x = startX + i * (barWidth + barSpacing);
      // Sine wave for preview
      const sine = Math.sin((i / bars) * Math.PI * 2);
      const barHeight = ((sine + 1) / 2) * (maxBarHeight * 0.7) + 4;
      const y = centerY - barHeight / 2;
      ctx.fillStyle = 'rgba(163,163,163,0.25)';
      ctx.fillRect(x, y, barWidth, barHeight);
    }
  }

  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d')!;
      canvas.width = 256;
      canvas.height = 48;
      initAudio();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  });

  $: if (audioUrl) {
    initAudio();
  }

  $: if (!isPlaying && canvas && ctx) {
    drawPreview();
  }
</script>

<div class="flex h-12 items-center justify-center">
  <button
    on:click={handlePlay}
    disabled={isPlaying}
    class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
    aria-label="Play"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="4,3 17,10 4,17" fill="currentColor" />
    </svg>
  </button>
  <canvas bind:this={canvas}></canvas>
</div>
