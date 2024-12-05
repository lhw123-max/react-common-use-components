import React, {useState, ReactElement, useRef, useEffect, CSSProperties} from "react";
import {generateRandomNumber, getPlatform} from "../../utils/";
import RecorderIcon from "../../assets/svgs/RecorderIcon";

const AudioRecorder: React.FC<{
    callback?: (file: File | null, duration: number) => void;
    children: ReactElement;
    statusContainerStyle?: CSSProperties,
    durationStyle?: CSSProperties

}> = ({callback, children, statusContainerStyle,durationStyle}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const [file, setFile] = useState<File | null>(null)
    const [duration, setDuration] = useState(0);
    const mediaRecorderRef = useRef<MediaRecorder>();
    const timer = useRef<any>();
    const touchStartY = useRef<number>(0);

    useEffect(() => {
        try {
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
                mediaRecorderRef.current = new MediaRecorder(stream);
            }).catch(error => {
                console.error("无法访问麦克风:", error);
            })
        } catch (error) {
            console.error("无法访问麦克风:", error);
        }
    }, []);

    useEffect(() => {
        if (!mediaRecorderRef.current) return;
        const handle = (evt: BlobEvent) => {
            const audioFile = new File(
                [evt.data],
                `${generateRandomNumber()}_${new Date().getTime()}.${getPlatform() === 'iOS' ? 'aac' : "wav"}`,
                {type: `audio/${getPlatform() === 'iOS' ? 'aac' : "wav"}`}
            );
            setFile(audioFile)
        };
        mediaRecorderRef.current!.ondataavailable = handle;
        return () => {
            mediaRecorderRef.current!.removeEventListener("dataavailable", handle);
        };
    }, [duration, callback]);

    useEffect(() => {
        if (file) {
            if (isCancelled) {
                setIsRecording(false)
                setDuration(0)
                setFile(null)
                setIsCancelled(false)
            } else {
                console.log(file,duration)
                if (callback) {
                    callback(file, duration)
                }
                setDuration(0)
                setFile(null)
            }
        }
    }, [isCancelled, isRecording, file])

    // 用户按下录音按钮
    const startRecording = () => {
        if (mediaRecorderRef.current?.state === "inactive") {
            mediaRecorderRef.current?.start();
            clearInterval(timer.current);
            timer.current = setInterval(() => {
                setDuration((d) => d + 1);
            }, 1000);
        }
    };

    // 用户松开录音按钮
    const stopRecording = () => {
        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
            clearInterval(timer.current);
        }
    };

    // 禁用右键菜单
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault(); // 禁用右键菜单
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsRecording(true);
        touchStartY.current = e.touches[0].clientY; // 记录初始触摸位置
        startRecording();
    };

    const handleTouchEnd = () => {
        stopRecording();

    };

    // 用户上划操作
    const handleTouchMove = (e: React.TouchEvent) => {
        const currentY = e.touches[0].clientY;
        if (currentY < touchStartY.current - 50) { // 向上滑动超过50px
            setIsCancelled(true)
            setIsRecording(false);
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove} // 处理滑动事件
            onContextMenu={handleContextMenu} // 禁用右键菜单
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                userSelect: "none"
            }}
        >
            {!isRecording && <div style={{width: "7.03rem", height: "7.03rem"}}/>}
            {
                isRecording &&
                <div

                    style={{
                        backgroundColor: `#f5F5F5`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius: '0.75rem',
                        marginBottom: "0.5rem",
                        width: "8.03rem",
                        height: "8.03rem",
                        ...statusContainerStyle
                    }}
                >
                    <RecorderIcon style={{width: "2rem", height: "2rem"}}/>
                    <div style={{
                        color: "#1677ff",
                        fontSize: "0.875rem",
                        lineHeight: "1rem",
                        wordBreak: "break-all",
                        wordWrap: "break-word",
                        marginTop: "0.5rem", ...durationStyle
                    }}>
                        {duration}s
                    </div>
                    <div
                        style={{
                            fontWeight: 500,
                            width: "3.5rem",
                            color: "#656870",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            marginTop: "0.5rem"
                        }}
                    >
                        松手发送 上滑取消
                    </div>
                </div>}

            {children}
        </div>
    );
};

export default AudioRecorder;
