import React from 'react';
// @ts-ignore
import Modal from "react-modal";

Modal.setAppElement('#root');

const XModal = ({isOpen, onRequestClose, styleContent, styleOverlay, children, zIndex, position}) => {
	const getYPosition = () => {
		if (!position) {
			return '-50%'
		} else if (position === 'center') {
			return '-50%'
		} else if (position === 'bottom') {
			return 0
		} else if (position === 'top') {
			return '-100%'
		} else {
			return '-50%'
		}
	}
	const getXPosition = () => {
		if (!position) {
			return '-50%'
		} else if (position === 'center') {
			return '-50%'
		} else if (position === 'right') {
			return 0
		} else if (position === 'left') {
			return '-100%'
		} else {
			return '-50%'
		}
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={{
				content: {
					top: position === 'bottom' ? '' : '50%',
					left: '50%',
					right: 'auto',
					bottom: position === 'bottom' ? 0 : 'auto',
					marginRight: '-50%',
					transform: `translate(${getXPosition()}, ${getYPosition()})`,
					padding: 0,
					backgroundColor: '',
					border: "none",
					borderRadius:0,
					...styleContent,
				}, overlay: {
					backgroundColor: 'rgba(0,0,0,0.5)',
					zIndex: zIndex ? zIndex : 999,
					...styleOverlay
				},
			}}
		>
			{children}
		</Modal>
	);
};

export default XModal;
