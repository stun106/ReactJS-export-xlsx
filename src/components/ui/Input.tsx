interface PropsInput {
    type: string
    className: string
    placeholder: string
    onChange?: () => void
    onClick?: () => void
    
}

const InputComponent: React.FC<PropsInput> = ({type,placeholder,className,onChange,onClick}:PropsInput) => {
    return (
        <>
        <input 
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
          />
        </>
    )
}

export default InputComponent