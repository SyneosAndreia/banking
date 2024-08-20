'use client';

import CountUp from 'react-countup';

function AnimatedCounter({amount} : {amount: number}) {
  return (
    <span className='w-full'>
        <CountUp 
        decimal=','
        duration={2.75}
        decimals={2}
        prefix="$"
        end={amount} />
    </span>
  )
}

export default AnimatedCounter
