import { ChangeEvent, ChangeEventHandler } from "react"

interface PropsInput {
    type: string
    className: string
    placeholder: string
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void
    style?: React.CSSProperties
    
}

const InputComponent: React.FC<PropsInput> = ({type,placeholder,className,style, onChange}:PropsInput) => {
    return (
        <>
        <input 
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
          />
        </>
    )
}

export default InputComponent