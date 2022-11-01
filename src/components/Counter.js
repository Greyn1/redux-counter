import { useDispatch, useSelector } from 'react-redux';
import { decrement, increase, increment, toggle } from '../Store/counter/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.value);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch(increment());
  }

  const IncreaseHandler = () => {
    dispatch(increase(10));
  }

  const DecrementHandler = () => {
    dispatch(decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increse by 10</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
