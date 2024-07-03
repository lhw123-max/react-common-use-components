import React, {CSSProperties, ReactNode} from "react";

interface ModalProps {
	children:ReactNode;
	openModal?:boolean;
	style?:CSSProperties;
	position?:string;
	onClose?:() => void;
}
const Modal = ({children,openModal,style,position='center',onClose}:ModalProps) => {

	function getPosition():any {
		if (position === 'top') {
			return {justifyContent:'center',alignItems:"flex-start"}
		}else  if (position === 'right') {
			return {justifyContent:'flex-end',alignItems:"center"}
		}else  if (position === 'bottom') {
			return {justifyContent:'center',alignItems:"flex-end"}
		}else  if (position === 'left') {
			return {justifyContent:'flex-start',alignItems:"center"}
		}else if (position === 'center'){
			return {justifyContent:'center',alignItems:"center"}
		}
	}

	return (
		<div>
			<style>
				{ `
				    @keyframes initAnimation {
				      0%   { opacity:0}
				      20%  { opacity:0.1}
				      40%  { opacity:0.2}
				      60%  { opacity:0.3}
				      80%  { opacity:0.4}
				      100% { opacity:0.5}
				    }
				 `}
			</style>
			{
				openModal &&

				<div  onClick={(e) => {
					if (onClose){
						onClose()
					}
					e.stopPropagation()}} style={{
					background:'rgba(0,0,0,0.5)',
					width:"100%",
					zIndex:1300,
					position:'fixed',
					inset:0,
					display:"flex",
					justifyContent:getPosition().justifyContent,
					alignItems:getPosition().alignItems,
					animation: 'initAnimation 0.25s ease',
					...style
				}}
				>
					{children}
				</div>

			}
		</div>
	)
}
export default  Modal
