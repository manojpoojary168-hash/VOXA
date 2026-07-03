const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://voxa-production-b5a2.up.railway.app";

export async function generateVoice(text: string, voice: string) {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      voice,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate voice");
  }

  return await response.json();
}

export const BASE_URL = API_URL;