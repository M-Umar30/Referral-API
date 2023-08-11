import React from 'react'
import ReferralCard from './ReferralCard'
import './../style.css'

function Home() { 
    const referrals = [
        {
            id: 1,
            title: "Referral 1", 
            description: "This is the first referralContrary to popular belief, Lorem Ipsum is "
        },
        {
            id: 2,
            title: "Referral 2",
            description: "This is the second referral"
        },
        {
            id: 3,
            title: "Referral 3",
            description: "This is the third referral"
        },
        {
            id: 4,
            title: "Referral 4",
            description: "This is the fourth referral"
        },
        {
            id: 5,
            title: "Referral 5",
            description: "This is the fifth referral"
        },
        {
            id: 6,
            title: "Referral 6",
            description: "This is the sixth referral"
        },
    ];
    return (
        <div className='scrollable-feed'>
            <ReferralCard referrals={referrals} likeControl={true}/>
        </div>
    )
}

export default Home
