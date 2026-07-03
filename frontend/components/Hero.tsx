export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center">

      <div className="mb-5 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300 backdrop-blur-md sm:px-5 sm:text-sm">
        ✨ Studio Quality AI Voices
      </div>

      <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

        Give your words

        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          a voice.
        </span>

      </h1>

      <p className="mt-6 max-w-2xl px-2 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">

        Create natural, expressive voiceovers in seconds.

        <br className="hidden sm:block" />

        Choose from multiple premium AI voices and
        bring your words to life.

      </p>

    </section>
  );
}