import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

interface PropsButton {
    className?: string;
    onClick?: () => React.MouseEventHandler<HTMLDivElement>;
}

const ButtonHome: React.FC<PropsButton> = ({ className, onClick }: PropsButton) => {
    return (
        <div
            className={`sm:w-20 h-20 opacity-40 cursor-pointer ${className}`}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAnglesRight} style={{ fontSize: '3rem', animation: 'police-lights 2s infinite' }} />

        </div>
    );
};

export default ButtonHome;
