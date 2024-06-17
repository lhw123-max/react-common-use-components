


const Modal = ({children,openModal,style,position,onClose}) => {
	
	function getPosition() {
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
			
			{
				openModal &&
				
				<div  onClick={(e) => {onClose();e.stopPropagation()}} style={{
					background:'rgba(0,0,0,0.5)',
					width:"100%",
					zIndex:1300,
					position:'fixed',
					inset:0,
					display:"flex",
					justifyContent:getPosition().justifyContent,
					alignItems:getPosition().alignItems,
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
