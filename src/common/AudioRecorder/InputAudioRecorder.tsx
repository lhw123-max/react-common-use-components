// import React, {ReactElement, useState} from 'react';
//
//
// interface AudioRecorderProps {
//     callback: (blob: Blob |File | null, duration: number | null) => void;
//     children: ReactElement;
// }
//
// const InputAudioRecorder: React.FC<AudioRecorderProps> = ({ callback, children }) => {
//     const [startTime,setStartTime] = useState(0)
//
//     const handleInputChange = (event: any) => {
//         const file = event.target.files[0];
//         if (file) {
//             const duration = (Date.now() - startTime) / 1000
//             callback(file,duration)
//         }
//
//     };
//
//     return (
//         <div
//             onClick={() =>{document.getElementById('audio-input')?.click();setStartTime(Date.now());}}
//             className={'flex items-center justify-start flex-col '}
//         >
//             <input
//                 id="audio-input"
//                 type="file"
//                 accept="audio/*"
//                 capture="microphone"
//                 className={'z-[-1]'}
//                 onChange={handleInputChange}
//             />
//             {children}
//         </div>
//     );
// };
//
// export default InputAudioRecorder;
