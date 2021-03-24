import React from 'react';
import './TextBlock.styles.css';
import {useAppSelector} from "../../hooks/hooks";
import {useDispatch} from "react-redux";
import {clear} from '../../redux/reducers/textSlice';

const TextBlock = () => {
    const dispatch = useDispatch();
    const text = useAppSelector(state => state.text);

    return (
        <div onClick={()=>dispatch(clear())}>
            {text}
        </div>
    );
};

export default TextBlock;