import { LeaderBoardNf } from 'gettint-drunk';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Leaderboard() {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/Home')
  }

  return (
    <LeaderBoardNf onClickNavigate={handleNavigate} />
  )
}

export default Leaderboard;