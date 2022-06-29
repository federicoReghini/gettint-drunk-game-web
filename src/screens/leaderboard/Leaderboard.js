import React from 'react';

// librarty
import { LeaderBoardNf } from 'gettint-drunk';

// navigate
import { useNavigate } from 'react-router-dom';

// routes
import { routes } from '../../routes/routes';

function Leaderboard() {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routes.HOME)
  }

  return (
    <LeaderBoardNf onClickNavigate={handleNavigate} />
  )
}

export default Leaderboard;