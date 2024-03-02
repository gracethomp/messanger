import { FC } from 'react'

type InputProps = {
    placeholder: string;
}

const Input: FC<InputProps> = (props) => {
    return <input type="text" placeholder={props.placeholder} className='border rounded-xl p-4 text-xl w-80 outline-none'/>
}

export default Input;