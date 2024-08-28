<<<<<<< HEAD
import React, {CSSProperties, ReactNode} from 'react';
import {debounce, isFunction} from "../../utils";


interface ButtonProps {
	children:ReactNode;
	onClick?:() => void;
	type?:string;
	style?:CSSProperties;
	disabled?:boolean;
	isDebounce?:boolean;
	debounceDelay?:number;
	className?: string;
}

const Button = ({children, onClick,type = '', style,disabled =false,isDebounce = false,debounceDelay = 500,className}:ButtonProps) => {

	const  click = async () => {
		if (!onClick){
			return;
		}
		if (!isFunction(onClick)){
			return;
		}
		if (isDebounce ){
			debounce(onClick,debounceDelay | 500)
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
		<button className={className} disabled={disabled} onClick={click} style={{
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
=======
import React, {CSSProperties, ReactNode} from 'react';
import {debounce, isFunction} from "../../utils";


interface ButtonProps {
	children:ReactNode;
	onClick?:() => void;
	type?:string;
	style?:CSSProperties;
	disabled?:boolean;
	isDebounce?:boolean;
	debounceDelay?:number;
	className?: string;
}

const Button = ({children, onClick,type = '', style,disabled =false,isDebounce = false,debounceDelay = 500,className}:ButtonProps) => {

	const  click = async () => {
		if (!onClick){
			return;
		}
		if (!isFunction(onClick)){
			return;
		}
		if (isDebounce ){
			debounce(onClick,debounceDelay | 500)
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
		<button className={className} disabled={disabled} onClick={click} style={{
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
>>>>>>> db323fb (s)
