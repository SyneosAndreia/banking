import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    const loggedIn = {firstName: 'AA', lastName: 'BB', email: 'aa@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || 'Guest'}
                    subtext= "Access and manage your accounts and transactions efficiently"
                />
                <TotalBalanceBox 
                    accounts= {[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}

                />
            </header>


            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[ { currentBalance: 123.50  }, { currentBalance: 123.50 } ]}
        />
    </section>
  )
}

export default Home
