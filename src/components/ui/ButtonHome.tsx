import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

interface PropsButton {
    className?: string;
    onClick?: (event:React.MouseEvent<HTMLButtonElement> ) => void;
    disabled?:boolean
}

const ButtonHome: React.FC<PropsButton> = ({ className,disabled,onClick}: PropsButton) => {
    return (
        <button
            className={`sm:w-20 h-20 opacity-40 cursor-pointer ${className}`}
            onClick={onClick}
            disabled={disabled} 
        >
            <FontAwesomeIcon icon={faAnglesRight} style={{ fontSize: '3rem', animation: 'police-lights 2s infinite' }} />

        </button>
    );
};

export default ButtonHome;
