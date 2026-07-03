"use client";

import { useRef, useState } from "react";
import VoiceCard from "./Voicecard";

type Props = {
  voice: string;
  setVoice: React.Dispatch<React.SetStateAction<string>>;
};

const femaleVoices = [
  { name: "Emma", description: "❤️ Warm & Friendly" },
  { name: "Bella", description: "🌸 Soft & Gentle" },
  { name: "Sarah", description: "✨ Bright & Natural" },
  { name: "Nicole", description: "💎 Professional" },
  { name: "Sky", description: "☁️ Calm & Clear" },
  { name: "Alloy", description: "⚡ Modern & Energetic" },
];

const maleVoices = [
  { name: "Adam", description: "🎙 Deep & Confident" },
  { name: "Michael", description: "🎬 Documentary" },
  { name: "Echo", description: "🌌 Smooth & Balanced" },
  { name: "Fenrir", description: "🦁 Cinematic" },
  { name: "Liam", description: "📖 Audiobook" },
  { name: "Onyx", description: "⚫ Dark & Rich" },
];

export default function VoiceSelector({
  voice,
  setVoice,
}: Props) {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);

  const currentAudio = useRef<HTMLAudioElement | null>(null);

  return (
    <div className="mt-10">

      <h2 className="mb-6 text-2xl font-bold">
        Choose a Voice
      </h2>

      <h3 className="mb-4 text-lg font-semibold text-violet-300">
        👩 Female Voices
      </h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {femaleVoices.map((item) => (

          <VoiceCard
            key={item.name}
            name={item.name}
            description={item.description}
            selected={voice === item.name}
            onClick={() => setVoice(item.name)}

            playingVoice={playingVoice}
            setPlayingVoice={setPlayingVoice}

            currentAudio={currentAudio}
          />

        ))}

      </div>

      <h3 className="mt-10 mb-4 text-lg font-semibold text-violet-300">
        👨 Male Voices
      </h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {maleVoices.map((item) => (

          <VoiceCard
            key={item.name}
            name={item.name}
            description={item.description}
            selected={voice === item.name}
            onClick={() => setVoice(item.name)}

            playingVoice={playingVoice}
            setPlayingVoice={setPlayingVoice}

            currentAudio={currentAudio}
          />

        ))}

      </div>

    </div>
  );
}