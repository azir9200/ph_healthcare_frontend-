import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// Create an emotion cache to avoid issues with SSR
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true, container: isBrowser ? document.head : undefined });
}
