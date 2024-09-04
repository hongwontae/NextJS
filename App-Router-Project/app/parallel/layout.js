'use client'

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

function layoutPage({ children, player, team }) {

  const playerRoute = useSelectedLayoutSegments('player');
  const teamRoute = useSelectedLayoutSegments('team');
  console.log(playerRoute );


  return (
    <>
      <main className="flex flex-col items-center text-center">
        {children}
        <div className="flex flex-col gap-4 mt-2 text-2xl text-red-500">
          {player}
          <hr></hr>
          {team}
        </div>
        <p>{playerRoute.find((ele)=>{
          return ele === 'setting'
        })}</p>
      </main>
    </>
  );
}

export default layoutPage;
