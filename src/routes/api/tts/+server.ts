import { json } from '@sveltejs/kit';
import client from '$lib/elevenlabs-config';

export async function POST({ request }) {
  const { text, voiceId = 'YXpFCvM1S3JbWEJhoskW' } = await request.json();

  const response = await client.textToSpeech.convert(voiceId, {
    text,
    outputFormat: 'mp3_44100_128',
    modelId: 'eleven_multilingual_v2'
  });

  if (!response) {
    return json({ error: 'Failed to generate audio' }, { status: 500 });
  }

  return new Response(response, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg'
    }
  });
}
