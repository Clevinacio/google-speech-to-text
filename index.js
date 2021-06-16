const fs = require('fs');
// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

async function main() {
  const client = new speech.SpeechClient();

  /**
   * Change the gcsUri to your file path
   */
  const gcsUri = 'gs://teste-speech/carmela.wav';
  const encoding = 'WAV';
  const sampleRateHertz = 16000;
  const languageCode = 'pt-BR';

  const config = {
    encoding: encoding,
    //sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  };

  const audio = {
    uri: gcsUri,
  };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file. This creates a recognition job that you
  // can wait for now, or get its result later.
  const [operation] = await client.longRunningRecognize(request);
  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
  fs.writeFile('resultado.txt', transcription, () => console.log("terminou"))
}

main().catch(console.error);