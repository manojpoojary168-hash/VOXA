from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from tts import generate_speech

app = FastAPI(title="Voxa API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")


class TTSRequest(BaseModel):
    text: str
    voice: str


@app.get("/")
def root():
    return {"message": "Welcome to Voxa API"}


@app.post("/generate")
def generate(request: TTSRequest):
    output_path = generate_speech(
        request.text,
        request.voice,
    )

    return {
        "success": True,
        "audio_url": output_path.replace("\\", "/"),
    }