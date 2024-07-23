import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const ManualCounter = () => {
    const location = useLocation();
    const name = location.state.name;
    const email = location.state.email;
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);


const incrementClick = () => {
    console.log('IncrementClick');
    dispatch(increment());
}

const decrementClick = () => {
    console.log('decrementClick');
    dispatch(decrement());
}

return (
    <div>
        {count > 0 ? <h1>Counter is {count}</h1> : <h1>Counter is zero</h1>}

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decrementClick}>Decrement</button>
    </div>
);
};

export default ManualCounter;