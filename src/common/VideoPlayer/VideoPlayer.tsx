import React, {CSSProperties, ReactNode, useEffect, useMemo, useRef, useState} from "react";
import ProgressBar, {ProgressBarProps} from "../ProgressBar/ProgressBar";
import PauseIcon from "../../assets/svgs/PauseIcon";
import AudioPlayIcon from "../../assets/svgs/AudioPlayIcon";
import FlexBox from "../FlexBox/FlexBox";
import FastBackwardIcon from "../../assets/svgs/FastBackwardIcon";
import FastForwardIcon from "../../assets/svgs/FastForwardIcon";
import VoiceIcon from "../../assets/svgs/VoiceIcon";
import MuteIcon from "../../assets/svgs/MuteIcon";
import FullScreenIcon from "../../assets/svgs/FullScreenIcon";
import CancelFullScreenIcon from "../../assets/svgs/CancelFullScreenIcon";
import LoadingIcon from "../../assets/svgs/LoadingIcon";
import MuteCancelIcon from "../../assets/svgs/MuteCancelIcon";

interface VideoPlayerProps {
    url:string;
    width?:string;
    height?:string;
    playIcon?:ReactNode;
    pauseIcon?:ReactNode;
    forwardIcon?:ReactNode;
    progressBarConfig?:ProgressBarProps;
    backwardIcon?:ReactNode;
    timeTextStyle?:CSSProperties;

}

const VideoPlayer = ({url,width,height,playIcon,pauseIcon,forwardIcon,progressBarConfig,backwardIcon,timeTextStyle}:VideoPlayerProps) => {
    const [played, setPlayed] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [closeMenu,setCloseMenu] = useState(false)
    const [lastTap, setLastTap] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [playSpeed,setPlaySpeed] = useState(1)
    const [showSpeedMenu,setShowSpeedMenu] = useState(false)
    const [loading, setLoading] = useState(false);
    const [playErr,setPlayErr] = useState(false)
    const [volume,setVolume] = useState(50)
    const [showVolume,setShowVolume] = useState(false)
    useEffect(() => {
        if (played) {
            videoRef.current?.play().then(() => {
                setTimeout(() => {
                    setShowVolume(false)
                    setShowSpeedMenu(false)
                    setCloseMenu(true)
                },3000)
            }).catch((err) => {
                setPlayErr(true)
                console.log("播放失败");
            });
        } else {
            videoRef.current?.pause();
        }
    }, [played]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.addEventListener("canplay", () => {
                console.log("音频可以开始播放");
                setDuration(videoRef.current?.duration || 0);
            });

            return () => {
                // 清理事件监听器
                videoRef.current!.removeEventListener("canplay", () => {});
            };
        }
    }, []);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.muted = isMuted;
        }
    },[isMuted])
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.playbackRate = playSpeed;
        }
    },[playSpeed])

    useEffect(() => {
        if (videoRef.current) {
            if (volume === 0) {
                return setIsMuted(true)
            }
            setIsMuted(false)
            videoRef.current!.volume = volume/100;
        }
    }, [volume]);

    useEffect(() => {
        if (loading){
            rotateSmoothly()
        }

    }, [loading])

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
        if (videoRef.current) {
            videoRef.current!.currentTime = Math.max(0, videoRef.current!.currentTime - 2);
        }
    }
    //快进
    const forward = () => {
        setPlayed(true)
        if (videoRef.current) {
            videoRef.current!.currentTime = Math.min(videoRef.current!.duration, videoRef.current!.currentTime + 2);
        }
    }
    const handleTouchEnd = (e:any) => {
        const currentTime = Date.now();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            setPlayed(!played);
            setCloseMenu(true)
        }
        setLastTap(currentTime);
        e.stopPropagation()
    };


    // 当视频开始加载时，显示 loading 动画
    const handleLoadStart = () => {
        setLoading(true);
    };

    // 当视频加载完成时，取消 loading 动画
    const handleLoadedData = () => {
        setLoading(false);
    };

    // 处理视频播放中的卡顿，可以使用 onwaiting 事件
    const handleWaiting = () => {
        setLoading(true);
    };

    // 视频播放完成后取消 loading 动画
    const handlePlaying = () => {
        setLoading(false);
    };
    function rotateSmoothly() {
        const loading_icon = document.getElementById('loading_icon')
        let rotation = 0;

        function animate() {
            rotation = (rotation + 6) % 360;
            if (loading_icon) {
                loading_icon.style.transform = `rotate(${rotation}deg)`;
                window.requestAnimationFrame(animate);
            }
        }

        animate();
    }
    const speeds =  [0.5,1,1.5,2]


    return (
        <div  style={{background:"#000000",width:isFullScreen?"100vw":(width||"100%"),height:isFullScreen?"100vh":(height||"100%"),maxWidth:"100vw",maxHeight:"100vh",position:isFullScreen?"fixed":"relative",inset:isFullScreen?0:""}}>
            {loading && <LoadingIcon id={'loading_icon'} style={{width:"2rem",height:"2rem",position:"absolute",top:"50%",left:"50%",marginTop:"-1rem",marginLeft:"-1rem"}}/>}
            {playErr &&<div style={{width:"5rem",height:"2rem",position:"absolute",top:"50%",left:"50%",color:"#FFFFFF",fontSize:"1rem",marginTop:"-1rem",marginLeft:"-2.5rem"}}>Play failed</div>}
            <video
                onTouchEnd={handleTouchEnd}
                onClick={(e) => {
                    setCloseMenu(!closeMenu)
                    setShowSpeedMenu(false)
                    setShowVolume(false)
                    e.stopPropagation()
                }}
                onLoadStart={handleLoadStart}
                onLoadedData={handleLoadedData}
                onWaiting={handleWaiting}
                onPlaying={handlePlaying}
                style={{width:isFullScreen?"100vw":(width||"100%"),height:isFullScreen?"100vh":(height||"100%"),maxWidth:"100vw",maxHeight:"100vh"}}
                ref={videoRef}
                src={url}
                onTimeUpdate={() => {
                    setCurrentTime(videoRef.current!.currentTime);
                }}
                onEnded={() => setPlayed(false)}
            />
            {

                <FlexBox style={{position:"absolute",zIndex:3,bottom:"0rem",width:isFullScreen?"100vw":(width||"100%"),opacity:closeMenu?0:1,background:"rgba(255,255,255,0.5)"}}>

                    {played ?
                        <FlexBox  onClick={() => setPlayed(false)}>
                            {pauseIcon ? pauseIcon :  <PauseIcon style={{width:"2rem",height:"2rem"}}  />}
                        </FlexBox>
                        :
                        <FlexBox  onClick={() => setPlayed(true)}>
                            {playIcon ? pauseIcon : <AudioPlayIcon style={{width:"2rem",height:"2rem"}} />}
                        </FlexBox>
                    }
                    <FlexBox style={{marginRight:"0.5rem"}} onClick={backward}>
                        {backwardIcon ? backwardIcon : <FastBackwardIcon style={{width:"2rem",height:"2rem"}}  />}
                    </FlexBox>
                    <ProgressBar onChange={(percent: number) => {
                        setPlayed(true)
                        const newTime = Math.floor((percent / 100) * duration)
                        if (videoRef.current) {
                            setCurrentTime(newTime)
                            videoRef.current!.currentTime = newTime;
                        }
                    }}  trackBgColor={progressBarConfig?.trackBgColor} barBgColor={progressBarConfig?.barBgColor} barWidth={"50%"} barHeight={progressBarConfig?.barHeight} percent={percent} />
                    <FlexBox style={{marginLeft:"0.5rem"}} onClick={forward}>
                        {forwardIcon ? forwardIcon : <FastForwardIcon style={{width:"2rem",height:"2rem"}}  />}
                    </FlexBox>
                    <div style={{marginLeft:"0.25rem",color:"#FFFFFF",...timeTextStyle}}>{totalTime?_currentTime +'/' +totalTime:''}</div>
                    <div onClick={(e) => {setShowSpeedMenu(!showSpeedMenu);e.stopPropagation()}} style={{width:"2rem",fontSize:"0.875rem",color:"#1677ff",position:"relative",padding:"0.25rem"}}>
                        {playSpeed}x
                        {
                            showSpeedMenu && <div style={{position:'absolute',width:"4rem",top:"-6.75rem",left:"-1.25rem",borderRadius:"0.5rem",background:"#FFFFFF"}}>
                                {speeds.map((item,index) => {
                                    return (
                                        <div onClick={(e) => {setPlaySpeed(item);setShowSpeedMenu(false);e.stopPropagation()}} style={{margin:"0.25rem 0",borderRadius:"0.5rem",background:playSpeed===item?"#1677ff":"#FFFFFF",color:playSpeed!==item?"#1677ff":"#FFFFFF"}} key={index}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
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

                    {!isFullScreen ? <FullScreenIcon onClick={() => {setIsFullScreen(true)}} style={{width:"2rem",height:"2rem",marginLeft:"0.5rem"}}/> :
                        <CancelFullScreenIcon  onClick={() => {setIsFullScreen(false)}} style={{width:"2rem",height:"2rem",marginLeft:"0.5rem"}}/>}


                </FlexBox>
            }

        </div>
    );
};

export default VideoPlayer;
