import React, {useState} from 'react';

const Button = ({children, onClick,type, style,disabled,isDebounce = false,debounceDelay = 5000}) => {
	const [debounce,setDebounce] = useState(isDebounce)
	const  click = () => {
		if (isDebounce ){
			if (!debounce) {
				return;
			}
			setDebounce(false)
			onClick()
			setTimeout(() => {
				setDebounce(true)
			},debounceDelay)
		}else {
			onClick()
		}
		
		
	}
	const getStyle = () => {
	    if (type === 'default' || !type){
			return {
				backgroundColor:"#fffffF",
				border:"1px solid #f0f0f0",
				color:"#000000",
			}
	    }else if (type === 'primary'){
		    return {
			    backgroundColor:"#1677ff",
			    border:"1px solid #1677ff",
			    color:"#FFFFFF",
		    }
	    }else if (type === 'success'){
		    return {
			    backgroundColor:"#00b578",
			    border:"1px solid #00b578",
			    color:"#FFFFFF",
		    }
	    }else if (type === 'danger'){
		    return {
			    backgroundColor:"#FF3141",
			    border:"1px solid #FF3141",
			    color:"#FFFFFF",
		    }
	    }else if (type === 'warning'){
		    return {
			    backgroundColor:"#ff8f1f",
			    border:"1px solid #ff8f1f",
			    color:"#FFFFFF",
			    
		    }
	    }
	}
	return (
		<button disabled={disabled} onClick={click} style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minWidth:"4rem",
			minHeight:"2rem",
			borderRadius:"0.25rem",
			fontSize:"0.875rem",
			outline:"none",
			...getStyle(),
			...style}}>
			{children}
		</button>
	)
}
export default Button;
