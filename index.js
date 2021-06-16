const fs = require('fs');
// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

async function main() {
  const client = new speech.SpeechClient();

  // Change the gcsUri to your file path
  //const gcsUri = 'gs://your-bucket/your-file';
  // Change enconding to the file type that you will use
  //const encoding = 'WAV';
  // Change to the hertz of your audio file
  //const sampleRateHertz = 16000;
  // Change the language to the audio speech language
  //const languageCode = 'pt-BR';

  const config = {
    encoding: encoding,
    //Uncomment here if you are going to use a file type other than WAV
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

  const [operation] = await client.longRunningRecognize(request);

  const [response] = await operation.promise();
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
  //Change the output path file directory and name here
  //fs.writeFile('your-output-file-name', transcription, () => console.log("finished"))
}

main().catch(console.error);