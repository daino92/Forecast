# Forecast

A Vue 3 weather forecast application powered by the OpenWeatherMap API.

## Development

```sh
pnpm install
cp .env.example .env
pnpm dev
```

Set `VITE_OPENWEATHER_API_KEY` in `.env` before searching for a forecast. The
API key is a browser-side key, so configure the allowed domains in OpenWeatherMap.

Build the production site with `pnpm build`. The GitHub Actions workflow deploys
the `dist/` directory to GitHub Pages.
