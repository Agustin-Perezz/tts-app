# TTS App - [![Netlify Status](https://api.netlify.com/api/v1/badges/649591c1-50b6-4599-9c38-10bf79e46409/deploy-status)](https://app.netlify.com/projects/tts-ap/deploys)

Deploy: https://tts-ap.netlify.app

A modern Text-to-Speech application built with SvelteKit that converts text to natural-sounding speech using ElevenLabs AI technology.

## Features

- Convert text to speech with natural AI voices
- Multiple voice options to choose from
- Real-time audio playback with waveform visualization
- Modern, responsive UI with beautiful animations
- Server-side TTS processing for better performance

## Technologies

- SvelteKit
- TypeScript
- Tailwind CSS
- ElevenLabs API
- Playwright (E2E testing)
- ESLint & Prettier
- Husky (Git hooks)
- Vite

## Getting Started

Install dependencies:

```
pnpm install
```

Set up your environment variables by creating a `.env` file:

```
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

Start the development server:

```
pnpm run dev
```

Build for production:

```
pnpm run build
```

Preview the production build:

```
pnpm run preview
```

Lint and format code:

```
pnpm run lint
pnpm run format
```

Run type checks:

```
pnpm run check
```

Run E2E tests:

```
pnpm run test
```

## Environment Variables

Set the following variable in your `.env` file:

```
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

You can get your API key by signing up at [ElevenLabs](https://elevenlabs.io/).

## How to Use

1. Enter your text in the textarea
2. Select a voice from the dropdown menu
3. Click the convert button to generate speech
4. Listen to the generated audio with the waveform player

## Deployment

The app is configured for deployment on Netlify with the `@sveltejs/adapter-netlify` adapter.

## CI/CD

GitHub Actions workflow runs on push to main:

- Installs dependencies
- Lints and formats code
- Runs type checks
- Installs Playwright browsers
- Runs E2E tests
- Builds the app

## Husky Git Hooks

- pre-commit: runs lint-staged
- pre-push: runs tests
