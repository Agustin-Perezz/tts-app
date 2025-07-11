import { writable } from 'svelte/store';

interface TTSState {
  audioUrl: string;
  isLoading: boolean;
  error: string;
}

function createTTSStore() {
  const { subscribe, update } = writable<TTSState>({
    audioUrl: '',
    isLoading: false,
    error: ''
  });

  return {
    subscribe,
    convertToSpeech: async (text: string, voiceId: string) => {
      if (!text.trim()) {
        update((state) => ({
          ...state,
          error: 'Please enter some text to convert'
        }));
        return;
      }

      update((state) => ({ ...state, isLoading: true }));

      try {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text, voiceId })
        });

        if (!response.ok) {
          throw new Error('Failed to convert text to speech');
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        update((state) => ({ ...state, audioUrl, isLoading: false }));
      } catch (err) {
        const errorMessage =
          (err as Error).message ||
          'An error occurred while converting text to speech';
        update((state) => ({
          ...state,
          error: errorMessage,
          isLoading: false
        }));
      }
    }
  };
}

export const ttsStore = createTTSStore();
