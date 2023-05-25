import { useWhisper } from '@chengsokdara/use-whisper'
import { useState } from 'react'


const Recorder = ({ onTranscriptChange }) => {
  const [recording, setRecording] = useState(false);

  const {
    transcript,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
  });

  const handleStop = () => {
    stopRecording();
    setRecording(false);
    onTranscriptChange(transcript);
  };

  const handleStart = () => {
    startRecording();
    setRecording(true);
  };


  return (
    <>
      <div className="buttons">
        <button
          className="button-6"
          onClick={handleStart}
          disabled={recording}
        >
          Start Recording
        </button>
        <button
          className="button-6"
          onClick={handleStop}
          disabled={!recording}
        >
          Stop Recording
        </button>
      </div>

      <div className='container'>
        <h1 className='text-title'>Transcribed Text:</h1>
        <div className='output'>
          <p >{recording ? '...' : ''}</p>
          <p>{transcript?.text && !recording ? transcript.text : ''}</p>
        </div>
        
      </div>
    </>
  );
};

export default Recorder;