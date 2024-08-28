import React, {useMemo} from 'react';

export interface ProgressBarProps {
    percent: number
    barWidth?: string,
    barHeight?: string,
    barBgColor?: string,
    trackBgColor?: string,

}

const ProgressBar = ({percent, barWidth, barHeight, barBgColor, trackBgColor}: ProgressBarProps) => {

    // const

    const percentStr = useMemo(() => {
        if (percent < 0) {
            return 0 + '%'
        } else if (percent > 100) {
            return 100 + '%'
        } else {
            return percent + '%'
        }
    }, [percent])

    return (
        <div style={{
            background: barBgColor ? barBgColor : "#eee",
            width: barWidth ? barWidth : "100%",
            height: barHeight ? barHeight : "16px",
            borderRadius: "0.5rem"
        }}>
            <div style={{
                background: trackBgColor ? trackBgColor : "#1677ff",
                width: percentStr,
                height: "100%",
                borderRadius: "0.5rem",
                transition: "width 0.5s ease"
            }}/>
        </div>
    );
};

export default ProgressBar;
