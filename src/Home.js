import React from 'react'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from './Redux/action';

export default function Home() {
    const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-primary" onClick={()=>dispatch(deposit(100))}>Deposit</button>
      Update balance
      <button className="btn btn-primary" onClick={()=>dispatch(withdraw(100))}>Withdraw</button>
    </div>
  )
}
