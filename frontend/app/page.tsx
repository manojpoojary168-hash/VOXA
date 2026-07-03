"use client";

import { useState } from "react";

import BackgroundGlow from "../components/Backgroundglow";
import Hero from "../components/Hero";
import TextInput from "../components/TextInput";
import VoiceSelector from "../components/Voiceselector";
import GenerateButton from "../components/generatebutton";
import AudioPlayer from "../components/Audioplayer";

import { generateVoice } from "../services/api";

export default function Home() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("Emma");

  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const [status, setStatus] = useState<
    "idle" | "generating" | "ready"
  >("idle");

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    setStatus("generating");
    setAudioUrl("");
    setLoading(true);

    try {
      const result = await generateVoice(text, voice);

      const url = `http://127.0.0.1:8000/${result.audio_url}`;

      setAudioUrl(url);

      setStatus("ready");
      setLoading(false);
    } catch (err) {
      console.error(err);

      alert("Something went wrong.");

      setStatus("idle");
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-16 text-white">
      <BackgroundGlow />

      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <Hero />

        <div className="h-12" />

        <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-xl md:p-10">

          <TextInput
            text={text}
            setText={setText}
          />

          <VoiceSelector
            voice={voice}
            setVoice={setVoice}
          />

          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
          />

          {/* STATUS CARD */}

          <div className="mt-8 rounded-3xl border border-zinc-800 bg-black/40 p-6">

            {status === "idle" && (

              <div className="py-6 text-center">

                <div className="mb-4 text-5xl">
                  🎙
                </div>

                <h3 className="text-2xl font-bold">
                  Ready to Generate
                </h3>

                <p className="mt-2 text-zinc-400">
                  Type your script above and click
                  Generate Voice.
                </p>

              </div>

            )}

            {status === "generating" && (

              <div className="py-6 text-center">

                <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>

                <h3 className="text-2xl font-bold">
                  Generating Voice...
                </h3>

                <p className="mt-2 text-zinc-400">
                  Creating your AI voice.
                </p>

              </div>

            )}

            {status === "ready" && (

              <>

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold">
                      🎧 Voice Ready
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Your AI voice has been generated successfully.
                    </p>

                  </div>

                  <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
                    Ready
                  </span>

                </div>

                <AudioPlayer
                  audioUrl={audioUrl}
                  voice={voice}
                />

                <div className="mt-6 grid grid-cols-3 gap-4">

                  <div className="rounded-xl bg-zinc-900 p-4 text-center">
                    <p className="text-xs uppercase text-zinc-500">
                      Voice
                    </p>

                    <p className="mt-1 font-semibold">
                      {voice}
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-900 p-4 text-center">
                    <p className="text-xs uppercase text-zinc-500">
                      Format
                    </p>

                    <p className="mt-1 font-semibold">
                      WAV
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-900 p-4 text-center">
                    <p className="text-xs uppercase text-zinc-500">
                      Status
                    </p>

                    <p className="mt-1 font-semibold text-emerald-400">
                      Ready
                    </p>
                  </div>

                </div>

              </>

            )}

          </div>

          <footer className="mt-12 border-t border-zinc-800 pt-8 text-center">

  <p className="text-sm text-zinc-500">
    Powered by curiosity.
  </p>

  <p className="mt-2 text-sm font-medium text-zinc-300">
    Built with 🧠 by{" "}
    <span className="text-violet-400 transition hover:text-violet-300">
      Manoj
    </span>
  </p>

  <p className="mt-4 text-xs text-zinc-600">
    Quick Mode • v1.0
  </p>

</footer>
          

        </div>

      </div>

    </main>
  );
}