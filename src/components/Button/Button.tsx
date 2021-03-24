import React from 'react';
import "./Button.styles.css";
import {useDispatch} from "react-redux";
import {update} from "../../redux/reducers/textSlice";

interface IButtonProps {
    title: string,
}

const Button: React.FC<IButtonProps> = ({title}) => {
    const dispatch = useDispatch();
    return (
        <div className='Button' onClick={() => dispatch(update())}>
            {title}
        </div>
    );
};

export default Button;