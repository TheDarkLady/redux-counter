import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment } from './store/slices/counter';
import MyComponent from './my-component/MyComponent';


function App() {
  const count = useAppSelector( state => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Count is {count}</h1>
        </div>
        <button onClick={() => dispatch(increment())}> Increment </button>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
        <MyComponent ></MyComponent>
    </>

  )
}

export default App
