import { getUsers, LeaderBoardNf } from 'gettint-drunk';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Leaderboard() {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Home')
  }
  const n = 123456;
  console.log(n);

  return (
    <LeaderBoardNf onClickNavigate={handleNavigate} />
  )
}

export default Leaderboard;