import React, {ReactNode, useState} from 'react';


interface AudioRecorderProps {
    callback: (file:  File) => void;
    children: ReactNode;
}

const InputAudioRecorder: React.FC<AudioRecorderProps> = ({callback, children}) => {

    const handleInputChange = (event: any) => {
        const file:File = event.target.files[0];
        if (file) {
            callback(file)
        }

    };

    return (
        <div
            onClick={() => {
                document.getElementById('audio-input')?.click();
            }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                flexDirection: "column"
            }}
        >
            <input
                id="audio-input"
                type="file"
                accept="audio/*"
                capture={"user"}
                style={{zIndex: -1,position:"absolute",top:16,visibility:"hidden"}}
                onChange={handleInputChange}
            />
            {children}
        </div>
    );
};

export default InputAudioRecorder;
