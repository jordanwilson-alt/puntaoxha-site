// Scheduled daily rebuild so Lodgify rates on the site are never
// more than ~24h old. The rebuild's prebuild step re-pulls rates.
// Hook URL lives in a private Netlify env var (not in the repo).
export default async () => {
  const hook = process.env.BUILD_HOOK_URL;
  if (!hook) return new Response('BUILD_HOOK_URL not set', { status: 500 });
  const res = await fetch(hook, { method: 'POST' });
  return new Response(`triggered: ${res.status}`);
};

export const config = {
  schedule: '0 11 * * *', // 11:00 UTC ≈ 5am Pacific-coast Mexico, daily
};
