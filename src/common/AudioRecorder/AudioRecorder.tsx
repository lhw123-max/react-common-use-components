// import React, { useState, useEffect, ReactElement, useRef } from 'react';
// import RecordVoice from "../../assets/images/vc_home/record_voice.svg";
// import CancelRv from "../../assets/images/vc_home/cancel_r_v.svg";
//
// interface AudioRecorderProps {
//     callback:  (blob: Blob | null, duration: number | null) => void;
//     children: ReactElement;
// }
//
// const AudioRecorder: React.FC<AudioRecorderProps> = ({ callback, children }) => {
//     const [isRecording, setIsRecording] = useState(false);
//     const [isCancelled, setIsCancelled] = useState(false);
//     const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
//     const [duration,setDuration] = useState(0)
//     const [touchState,setTouchState] = useState(0)
//     const [startTime, setStartTime] = useState<number | null>(null);
//     const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//     const touchStartY = useRef(0);
//     let timer
//
//     useEffect(() => {
//         return () => {
//             clearInterval(timer)
//             if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
//                 mediaRecorderRef.current.stop();
//             }
//         };
//     }, []);
//
//     const startRecording = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             const mediaRecorder = new MediaRecorder(stream);
//             setStartTime(Date.now());
//             timer = setInterval(() => {
//                 setDuration(value => value + 1)
//             },1000)
//             mediaRecorder.ondataavailable = (event: BlobEvent) => {
//                 setAudioChunks(prevChunks => [...prevChunks, event.data]);
//             };
//
//             mediaRecorder.onstop = () => {
//                 clearInterval(timer)
//                 if (startTime) {
//                     const endTime = Date.now();
//                     const duration = (endTime - startTime) / 1000;
//                     setDuration(duration)
//                     if (!isCancelled && audioChunks.length > 0) {
//                         const blob = new Blob(audioChunks, { type: 'audio/wav' });
//                         callback(blob, duration);
//                     } else {
//                         callback(null, null);
//                     }
//                     setAudioChunks([]);
//                     setIsCancelled(false);
//                 }
//
//             };
//
//             mediaRecorder.start();
//             mediaRecorderRef.current = mediaRecorder;
//             setIsRecording(true);
//         } catch (error) {
//             setDuration(0)
//             clearInterval(timer)
//             console.error('无法访问麦克风:', error);
//         }
//     };
//
//     const stopRecording = () => {
//         if (mediaRecorderRef.current && isRecording) {
//             mediaRecorderRef.current.stop();
//             setIsRecording(false);
//         }
//     };
//
//     const handleTouchStart = (event: React.TouchEvent) => {
//         setTouchState(1)
//         touchStartY.current = event.touches[0].clientY;
//         startRecording();
//     };
//
//     const handleTouchMove = (event: React.TouchEvent) => {
//         const touchCurrentY = event.touches[0].clientY;
//         if (touchCurrentY < touchStartY.current - 50) {
//             setTouchState(2)
//             setIsCancelled(true);
//             stopRecording();
//         } else {
//             setIsCancelled(false);
//         }
//     };
//
//     const handleTouchEnd = () => {
//         if (!isCancelled) {
//             stopRecording();
//         } else {
//             setTouchState(0)
//             setDuration(0)
//             // 如果取消，则清空录音数据
//             setAudioChunks([]);
//         }
//     };
//
//
//
//     return (
//         <div
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             className={'flex items-center justify-start flex-col '}
//         >
//             {touchState ===0 && <div className={'w-[7.03rem] h-[7.03rem]'} />}
//             {touchState > 0 && <div className={ 'flex items-center justify-center flex-col w-[7.03rem] h-[7.03rem]'}>
//                 {touchState === 1 &&<img src={RecordVoice} className={'w-[2.97rem] h-[1.98rem]'} alt=""/>}
//                 <div className={'text-[#7FEADC] text-[0.875rem] leading-[1rem] break-all text-wrap'}>{duration}s</div>
//                 {touchState === 2 && <img src={CancelRv} className={'w-[2.84em] h-[2.47rem]'} alt=""/>}
//                 <div className={'text-[#656870] text-[0.875rem] leading-[1rem] w-[3.73rem] break-all text-wrap'}>{touchState === 1 ? "松手发送上滑取消":"松手撤销"}</div>
//
//             </div>}
//             {children}
//         </div>
//     );
// };
//
// export default AudioRecorder;
//
