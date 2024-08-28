import React,{CSSProperties} from "react";

const AudioPlayIcon: React.FC<{ style?: CSSProperties }>  = ({style}) =>
    (
            <svg version="1.1" style={{ ...style,display: 'block', margin: 'auto' }} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <path d="M810.4 465.8 253.6 134.4c-6.8-4-13.8-6.4-21.8-6.4-21.8 0-39.6 18-39.6 40L192 168l0 688 0.2 0c0 22 17.8 40 39.6 40 8.2 0 15-2.8 22.4-6.8l556.2-331c13.2-11 21.6-27.6 21.6-46.2C832 493.4 823.6 477 810.4 465.8z" p-id="1463" fill="#1677ff"></path>
            </svg>



    )

export default  AudioPlayIcon