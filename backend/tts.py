from kokoro import KPipeline
import soundfile as sf
import numpy as np
import os
import time

pipeline = None

OUTPUT_DIR = "outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_MAP = {
    # Female Voices
    "Emma": "af_heart",
    "Bella": "af_bella",
    "Sarah": "af_sarah",
    "Nicole": "af_nicole",
    "Sky": "af_sky",
    "Alloy": "af_alloy",

    # Male Voices
    "Adam": "am_adam",
    "Michael": "am_michael",
    "Echo": "am_echo",
    "Fenrir": "am_fenrir",
    "Liam": "am_liam",
    "Onyx": "am_onyx",
}


def generate_speech(text: str, voice: str):
    global pipeline

    if pipeline is None:
        pipeline = KPipeline(lang_code="a")

    kokoro_voice = VOICE_MAP.get(voice, "af_heart")

    generator = pipeline(
        text=text,
        voice=kokoro_voice,
    )

    audio_chunks = []

    for _, _, audio in generator:
        audio_chunks.append(audio)

    final_audio = np.concatenate(audio_chunks)

    filename = f"{int(time.time() * 1000)}.wav"
    output_path = os.path.join(OUTPUT_DIR, filename)

    sf.write(output_path, final_audio, 24000)

    return output_path