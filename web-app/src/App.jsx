import Recorder from "./components/Recorder";
import VideoBox from "./components/VideoBox";
import "./css/App.css";
import { useState } from 'react'


function App() {

    const [transcript, setTranscript] = useState('');

    const handleTranscriptChange = (newTranscript) => {
      setTranscript(newTranscript);
    };

    return (
        <div className="App">
            <div className="header">
                <h1 className="title">AutoASL</h1>
            </div>
            <div className="body">
                <Recorder onTranscriptChange={handleTranscriptChange}/>
                <VideoBox transcript={transcript.text}/>
            </div>
            <div className="footer">

            </div>
        </div>
    );
    }

export default App;
