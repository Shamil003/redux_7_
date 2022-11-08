import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../redux/slice";


const UsersPages = () => {
    const state = useSelector((state) => state.coreReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getData())
    },[])

    const check = () => {
        console.log(state)
    }

    return (
        <div>
            <button onClick={check}>add</button>
            {
                state.data.map((item) => (
                    <Card item={item}/>
                ))
            }
        </div>
    );
};

export default UsersPages;