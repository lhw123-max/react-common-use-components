import React, {CSSProperties, ReactNode, useEffect, useMemo, useRef, useState} from "react";
import ProgressBar, {ProgressBarProps} from "../ProgressBar/ProgressBar";
import PauseIcon from "../../assets/svgs/PauseIcon";
import AudioPlayIcon from "../../assets/svgs/AudioPlayIcon";
import FlexBox from "../FlexBox/FlexBox";
import FastBackwardIcon from "../../assets/svgs/FastBackwardIcon";
import FastForwardIcon from "../../assets/svgs/FastForwardIcon";
import MuteIcon from "../../assets/svgs/MuteIcon";
import VoiceIcon from "../../assets/svgs/VoiceIcon";
import MuteCancelIcon from "../../assets/svgs/MuteCancelIcon";

interface AudioPlayerProps {
    url:string;
    playIcon?:ReactNode;
    pauseIcon?:ReactNode;
    forwardIcon?:ReactNode;
    progressBarConfig?:ProgressBarProps;
    backwardIcon?:ReactNode;
    timeTextStyle?:CSSProperties;

}

const AudioPlayer = ({url,playIcon,pauseIcon,forwardIcon,progressBarConfig,backwardIcon,timeTextStyle}:AudioPlayerProps) => {
    const [played, setPlayed] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume,setVolume] = useState(50)
    const [showVolume,setShowVolume] = useState(false)
    useEffect(() => {
        if (played) {
            audioRef.current?.play().catch((err) => {
                console.log("播放失败");
            });
        } else {
            audioRef.current?.pause();
        }
    }, [played]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current!.addEventListener("canplay", () => {
                console.log("音频可以开始播放");
                setDuration(audioRef.current?.duration || 0);
            });

            return () => {
                // 清理事件监听器
                audioRef.current!.removeEventListener("canplay", () => {});
            };
        }
    }, []);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current!.muted = isMuted;
        }
    },[isMuted])
    const totalTime:string = useMemo(() => {
        const second = Math.floor(duration);
        const remainder = Math.round(second % 60);
        const minute = Math.round((second - remainder) / 60);

        const remainder2 = remainder < 10 ? "0" + remainder.toString() : remainder;
        return minute + ":" + remainder2;
    }, [duration]);

    const percent:number = useMemo(() => {
        return duration !== 0 ? Math.round((currentTime / duration) * 100) : 0;
    }, [currentTime, duration]);

    const _currentTime:string = useMemo(() => {
        const second = Math.floor(currentTime);
        const remainder = Math.round(second % 60);
        const minute = Math.round((second - remainder) / 60);
        const remainder2 = remainder < 10 ? "0" + remainder.toString() : remainder;
        return minute + ":" + remainder2;
    }, [currentTime]);



    //后退
    const backward = () => {
        setPlayed(true)
        if (audioRef.current) {
            audioRef.current!.currentTime = Math.max(0, audioRef.current!.currentTime - 2);
        }
    }

    //快进
    const forward = () => {
        setPlayed(true)
        if (audioRef.current) {
            audioRef.current!.currentTime = Math.min(audioRef.current!.duration, audioRef.current!.currentTime + 2);
        }
    }
    console.log(isMuted)
    return (
        <div style={{width:"100%",backgroundColor:"rgba(255,255,255,0.5)"}}>
            <audio
                ref={audioRef}
                src={url}
                onTimeUpdate={() => {
                    setCurrentTime(audioRef.current!.currentTime);
                }}
                onEnded={() => setPlayed(false)}
            />
            <FlexBox style={{width:"100%"}}>

                {played ?
                    <FlexBox  onClick={() => setPlayed(false)}>
                        {pauseIcon ? pauseIcon :  <PauseIcon style={{width:"2rem",height:"2rem"}}  />}
                    </FlexBox>
                    :
                    <FlexBox  onClick={() => setPlayed(true)}>
                        {playIcon ? pauseIcon : <AudioPlayIcon style={{width:"2rem",height:"2rem"}} />}
                    </FlexBox>
                }
                <FlexBox  onClick={backward}>
                    {backwardIcon ? backwardIcon : <FastBackwardIcon style={{width:"2rem",height:"2rem"}}  />}
                </FlexBox>
                <ProgressBar onChange={(percent: number) => {
                    setPlayed(true)
                    const newTime = Math.floor((percent / 100) * duration)
                    if (audioRef.current) {
                        setCurrentTime(newTime)
                        audioRef.current!.currentTime = newTime;
                    }
                }} trackBgColor={progressBarConfig?.trackBgColor} barBgColor={progressBarConfig?.barBgColor} barWidth={progressBarConfig?.barWidth || "6rem"} barHeight={progressBarConfig?.barHeight} percent={percent} />
                <FlexBox style={{marginLeft:"0.5rem"}}  onClick={forward}>
                    {forwardIcon ? forwardIcon : <FastForwardIcon style={{width:"2rem",height:"2rem"}}  />}
                </FlexBox>
                <div style={{position:"relative"}}>
                    <FlexBox style={{margin:"0.25rem"}}>
                        {isMuted ? <MuteIcon onClick={() => {setIsMuted(false)}} style={{width:"2rem",height:"2rem",margin:"0.25rem"}}/>:
                            <MuteCancelIcon onClick={() => {setIsMuted(true)}} style={{width:"2rem",height:"2rem",margin:"0.25rem"}}/>
                        }
                        <VoiceIcon  onClick={() => {setShowVolume(!showVolume)}} style={{width:"2rem",height:"2rem",marginLeft:"0.5rem"}}/>
                    </FlexBox>

                    {
                        showVolume && <FlexBox style={{position:"absolute",top:"-1.5rem",left:"-1rem"}}>
                            <div style={{color:"#FFFFFF",fontSize:"1rem",marginRight:"0.5rem"}}>{volume}</div>
                            <ProgressBar  onChange={(volume: number) => {
                                setVolume(volume)
                            }}  barWidth={"5rem"} barHeight={"0.5rem"} percent={volume} />
                        </FlexBox>
                    }
                </div>
                <div style={{color:"#B3B3B3",...timeTextStyle}}>{totalTime?_currentTime +'/' +totalTime:''}</div>

            </FlexBox>
        </div>
    );
};

export default AudioPlayer;
