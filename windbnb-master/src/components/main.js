import React, {useState, createContext} from 'react';
import Stay from './stay';
import Card from './card';

import Header from './header';
import stays from '../data/stays.json';

export const FilterContext = createContext();

function Main() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [guests, setGuests] = useState(0);

    return (
        <FilterContext.Provider value={{
            city, setCity, country, setCountry, guests, setGuests
        }}>
            <Header/>
            <div style={{margin: '2rem 0'}}>
                <Stay />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                {
                    stays.map((stay,i) => (
                        ((city && country) ? stay.city === city && stay.country === country && stay.maxGuests >= guests : true) ?
                            (<Card 
                                key={i}
                                superHost={stay.superHost}
                                rating={stay.rating}
                                type={stay.type}
                                beds={stay.beds}
                                photo={stay.photo}
                                title={stay.title}
                            />) : null
                        )
                    )
                }
                </div>
            </div>
        </FilterContext.Provider>
    )
}

export default Main
