import React, {ChangeEvent, CSSProperties, useEffect, useRef, useState} from 'react';
import FlexBox from "../FlexBox/FlexBox";
import {range} from "../../utils";

interface PasswordInputProps {
    maxLength?: number,
    style?: CSSProperties,
    inputItemStyle?: CSSProperties,
    iconStyle?: CSSProperties,
    onChange?: (value: string) => void,
    onSubmit?: (value: string) => void,
    autoFocus?:boolean
}

const PasswordInput = ({maxLength = 6, style, inputItemStyle, iconStyle, onChange, onSubmit,autoFocus = true}: PasswordInputProps) => {
    const [state, setState] = useState({text: ''});
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        const inputElement = ref.current;
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);
        if (inputElement) {
            inputElement.addEventListener('focus', handleFocus);
            inputElement.addEventListener('blur', handleBlur);
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('focus', handleFocus);
                inputElement.removeEventListener('blur', handleBlur);
            }
        };
    }, []);
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (state.text.length > maxLength - 1 && onSubmit) {
            onSubmit(state.text)
        }

    }, [state.text])


    const onPress = () => {
        const inputElement = ref.current;
        if (inputElement) {
            inputElement.focus();
        }
    };
    return (
        <FlexBox onClick={onPress} style={{
            background: "#FFFFFF",
            position: "relative",
            width: 44 * maxLength,
            ...style
        }}>
            <style>
                {`
                     @keyframes blink {
                          0%, 100% {
                            opacity: 1;
                          }
                          50% {
                            opacity: 0;
                          }
                    }
                `}
            </style>
            {
                range(maxLength as number).map((_, i) => {
                    return (
                        <div key={i} style={{
                            marginLeft: i === 0 ? 0 : 4, height: 44,
                            width: 44,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#F3F3F3",
                            borderRadius: 12,
                            fontSize: 16, ...inputItemStyle
                        }}>
                            {(i === state.text.length && isFocused) && <div style={{
                                display: "inline-block",
                                width: 1,
                                height: 16,
                                backgroundColor: "#000000",
                                animation: "blink 1s step-start infinite"
                            }}/>}
                            {i < state.text.length ? <div style={{
                                width: 16,
                                height: 16,
                                backgroundColor: "#000000",
                                borderRadius: 16, ...iconStyle
                            }}/> : null}
                        </div>
                    )
                })
            }
            <input
                style={{opacity: 0, zIndex: -1, position: "absolute", top: 8, left: "50%", width: 1}}
                ref={ref}
                maxLength={maxLength}
                autoFocus={autoFocus}
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length <= maxLength) {
                        setState({text: e.target.value});
                        if (onChange) {
                            onChange(e.target.value);
                        }
                    }

                }}
            />
        </FlexBox>
    );

};


export default PasswordInput;
