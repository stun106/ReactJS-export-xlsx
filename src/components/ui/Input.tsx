interface PropsInput {
    type: string
    className: string
    placeholder: string
    onChange?: () => void
    onClick?: () => void
    style?: React.CSSProperties
    
}

const InputComponent: React.FC<PropsInput> = ({type,placeholder,className,style, onChange,onClick}:PropsInput) => {
    return (
        <>
        <input 
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
            style={style}
          />
        </>
    )
}

export default InputComponent