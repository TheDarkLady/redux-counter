import React from 'react'
import { useAppSelector } from '../store/hooks'

const MyComponent: React.FC = () => {
    const count = useAppSelector((s) => s.counter)
  return (
    <div>
      <h1>MyCom : {count}</h1>
    </div>
  )
}

export default MyComponent
