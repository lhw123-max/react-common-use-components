import React, {CSSProperties, ReactNode, useRef, useState} from 'react';
import PlayIcon from "../../assets/svgs/PlayIcon";
import FlexBox from "../FlexBox/FlexBox";
import {generateRandomNumber} from "../../utils";
interface PreviewDomProps {
    url:string,
    videoStyle?:CSSProperties;
    children?:ReactNode |undefined;
    playIcon?:string;
    autoPlay?:boolean;
    onClose?:() => void | undefined;
}
 const VideoDom = ({url,videoStyle,onClose,playIcon,autoPlay}:PreviewDomProps) => {
    const [showPlayIcon, setShowPlayIcon] = useState(autoPlay?!autoPlay:false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const width = window.innerWidth
    const height = window.innerHeight
    const videoId = 'video_' + generateRandomNumber()
    const playVideo = () => {
        const videoDom = document.getElementById(videoId) as HTMLVideoElement
        videoDom.addEventListener('ended', handleVideoEnded);
        videoDom.addEventListener('pause', handleVideoPause); // 添加暂停事件监听
        videoDom.play()
        setShowPlayIcon(false)
    }


    const pauseVideo = () => {
        const videoDom = document.getElementById(videoId) as HTMLVideoElement
        videoDom.pause()
        setShowPlayIcon(true)
    }

    const handleVideoPause = () => {
        setShowPlayIcon(true)
        // 在此处编写其他暂停事件处理代码
    };
    const handleVideoEnded = () => {
        setShowPlayIcon(true)
    }

    return (
        <FlexBox onClick={onClose} style={{position: "relative", width: width/1.125,maxHeight: height/1.25,height: height/1.125}}>
            {showPlayIcon ? <img style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "2rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                backgroundColor: "#FFFFFF",
                objectFit: "fill",
                marginLeft:"-1rem",
                marginTop:"-1rem",
                zIndex: 1100,
            }} onClick={(e) => {
                playVideo();
                e.stopPropagation()
            }} src={playIcon}/> : <div onClick={(e) => {
                playVideo();
                e.stopPropagation()
            }} ><PlayIcon   style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "2rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                backgroundColor: "#FFFFFF",
                objectFit: "fill",
                marginLeft:"-1rem",
                marginTop:"-1rem",
                zIndex: 1100,
            }}/></div>}
            <video  onClick={(e) => {
                if (!showPlayIcon){
                    pauseVideo();
                }else {
                    playVideo()
                }
                e.stopPropagation()
            }}  autoPlay={autoPlay} ref={videoRef} id={videoId} style={{width: width/1.25,maxHeight: height/1.25,...videoStyle}}   src={url}/>
        </FlexBox>

    )
}
export default VideoDom
