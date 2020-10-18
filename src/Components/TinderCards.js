import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import SwipeButtons from './SwipeButtons'

function TinderCards() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        const fetchData = async() => {
            fetch("http://localhost:8001/tinder/cards")
            .then(response => response.json())
            .then(result => {
                setPeople(result)
            })
        }    
        fetchData();
        },[people])

    console.log(people)
    const outOfFrame = (name) => {
        console.log(name + 'left the screen')
      }
    const swiped = (dorectopn, nameToDelete) => {
        console.log('removing' + nameToDelete)
    }
      
    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
            {people && people.map((person) => (
                 <TinderCard 
                 className='swipe'
                 key={person.name}
                 onSwipe={(dir => swiped(dir, person.name))}
                 onCardLeftScreen={() => outOfFrame(person.name)} 
                 preventSwipe={['up', 'down']}>
                    <div className='card'
                    style={{ backgroundImage: `url(${person.imgUrl})` }}>
                        <h3>{person.name}</h3>
                    </div>

                 </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
