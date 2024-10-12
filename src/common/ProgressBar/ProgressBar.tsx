import React, { useEffect, useRef, useState } from 'react';
import SlideBlockIcon from "../../assets/svgs/SlideBlockIcon";

export interface ProgressBarProps {
    percent: number;
    min?: number;
    max?: number;
    barWidth?: string;
    barHeight?: string;
    barBgColor?: string;
    trackBgColor?: string;
    onChange?: (percent: number) => void;
    isOpenSlideBlock?: boolean;
}

const ProgressBar = ({
                         percent,
                         min = 0,
                         max = 100,
                         barWidth,
                         barHeight,
                         barBgColor,
                         trackBgColor,
                         onChange,
                         isOpenSlideBlock = true,
                     }: ProgressBarProps) => {
    const [sliderValue, setSliderValue] = useState(percent);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        setSliderValue(percent);
    }, [percent]);

    const handleTouchMove = (event: TouchEvent) => {
        if (isFollowing && trackRef.current) {
            const trackDom = trackRef.current as HTMLDivElement;
            const touch = event.touches[0];
            const track = trackDom.getBoundingClientRect();
            const position = touch.clientX - track.left;
            const targetValue = getValueByPosition(position);
            setPercent(targetValue);
        }
    };

    const handleTouchStart = () => {
        setIsFollowing(true);
    };

    const handleTouchEnd = () => {
        setIsFollowing(false);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (track && isOpenSlideBlock) {
            track.addEventListener('touchmove', handleTouchMove);
            track.addEventListener('touchstart', handleTouchStart);
            track.addEventListener('touchend', handleTouchEnd);

            return () => {
                track.removeEventListener('touchmove', handleTouchMove);
                track.removeEventListener('touchstart', handleTouchStart);
                track.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, [isFollowing]);

    const setPercent = (newPercent: number) => {
        const clampedPercent = Math.max(min || 0, Math.min(newPercent, max || 100));
        setSliderValue(clampedPercent);
        if (onChange) onChange(clampedPercent);
    };

    const getValueByPosition = (position: number) => {
        return Math.round((position / (trackRef.current?.offsetWidth ?? 1)) * (max - min)) + min;
    };

    const onTrackClick = (event: React.MouseEvent) => {
        if (!isOpenSlideBlock) return;
        event.stopPropagation();
        const track = trackRef.current;
        if (!track) return;
        const sliderOffsetLeft = track.getBoundingClientRect().left;
        const position = event.clientX - sliderOffsetLeft;
        const targetValue = getValueByPosition(position);
        setPercent(targetValue);
    };

    return (
        <div
            ref={trackRef}
            style={{
                background: barBgColor || "#eee",
                width: barWidth || "100%",
                height: barHeight || "16px",
                borderRadius: "0.5rem",
                position: "relative",
                // cursor: "pointer"
            }}
            onClick={onTrackClick}
        >
            <div
                style={{
                    background: trackBgColor || "#1677ff",
                    width: `${((sliderValue - min) / (max - min)) * 100}%`,
                    height: "100%",
                    borderRadius: "0.5rem",
                    transition: !isOpenSlideBlock ? "width 0.25s ease-out" : "",
                }}
            >
                {
                    isOpenSlideBlock &&
                    <SlideBlockIcon
                        style={{
                            position: "absolute",
                            left: `${((sliderValue - min) / (max - min)) * 100}%`,
                            transform: 'translateX(-50%)',
                            cursor: "grab",
                            width: barHeight || "1rem",
                            height: barHeight || "1rem",
                        }}
                    />
                }
            </div>
        </div>
    );
};

export default ProgressBar;
