import React, { useEffect, useState} from 'react';
let date
let dater
const CountDown = ({onClick,style,status,color}) => {
    const [counts,setCounts] = useState(60)
    const [isSend,setIsSend] = useState(0)
    useEffect(() => {
        return () => {
            clearInterval(dater)
        }
    },[])
    useEffect(() => {
        if (status && isSend === 1) {
	        startTimer()
        }else if (isSend === 2 || isSend===0 || !status){
            clearInterval(dater)
            setCounts(60)
        }
    },[status,isSend])

    function startTimer() {
        setCounts(60)
        if (dater) {
            clearInterval(dater)
        }
        date = new Date().getTime()
        dater = setInterval(() => {
            let newDate = new Date().getTime()
            let count = Math.floor((newDate-date)/1000)
            if (count > 60) {
                clearInterval(dater);
                setIsSend(2)
            }
            let dValue = 60-count
            setCounts(dValue)
        }, 1000);
    }

    function getText() {
        if (isSend === 0) {
            return  '获取验证码'
        }else if (isSend === 1) {
            return counts + 's后重试'
        }else if (isSend === 2){
            return '重新获取'
        }
    }
	
	return (
        <div style={{backgroundColor:isSend!==1?"#7A57EB":"#E3E3E3",color:"#FFFFFF",...style,}} onClick={() => {
            if (isSend !== 1){
                onClick()
	            setIsSend(1)
            }
        }}>
            {getText()}
        </div>
    );
};

export default CountDown;
