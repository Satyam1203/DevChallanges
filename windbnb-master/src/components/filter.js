import React, {useContext, useRef ,useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';

import {FilterContext} from './main';
import AddGuests from './addGuests';
import stays from '../data/stays.json';

const locations = [];

const Input = styled.input`
    border-radius: 1rem;
    box-shadow: none;
    border: 0;
    width: 100%;
    height: 100%;
    padding: 24px 18px 12px 18px;
    outline-color: grey;
    -moz-outline-radius: 1rem;
`;

const Label = styled.label`
    position: absolute;
    top: 6px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 9px;
    left: 18px;
`;

const InputWrapper = styled.div`
    position: relative;
    border-right: 1px solid grey;
    @media (max-width: 768px){
        border: none;
        border-bottom: 1px solid grey;
        width: 100%;
    }
`;


const FilterMenuWrapper = styled.div`
    position :absolute;
    top:0;
    left:0;
    width: 100%;
    padding: 5rem;
    background: #FFF;
    align-items: center;
    @media (max-width: 768px){
        margin-top: 1rem;
    }
`;

const FilterMenu = styled.div`
    width: 100%;
    background: #FFF;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid lightgrey;
    // overflow: hidden;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`;

const Location = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 1rem;
    cursor: pointer;
    color: #4F4F4F;
    &:hover{
        background: lightgrey;
    }
`;

const SearchBtn = styled.button`
    display: inline-flex;
    align-items: center;
    width: max-content;
    background: rgba(235, 87, 87, 0.9);
    border: 0;
    outline: 0;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    color:#FFF;
    cursor: pointer;
    padding: 10px 20px;
    line-height: 100%;
    font-size: 14px;
    @media (max-width: 768px){
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;
    
    
function Filter(props) {
    const [showLocations, setshowLocations] = useState(false);
    const [showGuestMenu, setshowGuestMenu] = useState(false);
    const [loc, setLoc] = useState('')
    const [adults, setAdults] = useState(0);
    const [child, setChild] = useState(0);
    const location = useRef(null);
    const {setCity, setCountry, setGuests} = useContext(FilterContext);


    const displayLocations = ()=>{
        setshowLocations(true);
        if(locations.length) return; 
        stays.forEach(stay => {
            if((locations.find((location) => location.city === stay.city && location.country === stay.country) === undefined)){
                locations.push({city: stay.city, country: stay.country});
            }
        })
    }

    const filterResults = () => {
        props.toggleMenu(false);
        if(loc) {
            setCity(`${loc.split(',')[0].trim()}`);
            setCountry(`${loc.split(',')[1].trim()}`);
        }
        if(adults+child > 0) setGuests(adults+child);
    }
    
    return (
            <FilterMenuWrapper>
                <FilterMenu>
                    <InputWrapper>
                        <Label>LOCATION</Label>
                        <Input ref={location} placeholder="Add Location" onClick={displayLocations} value={loc} onChange={e => setLoc(e.target.value)}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Guests</Label>
                        <Input placeholder="Add Guests" onClick={() => setshowGuestMenu(true)} value={adults+child} readOnly/>
                    </InputWrapper>
                    <div>
                        <SearchBtn onClick={filterResults}>
                            <SearchIcon />
                            Search
                        </SearchBtn>
                    </div>
                </FilterMenu>
                <FilterMenu style={{border: 'none', height: '300px'}}>
                    <div style={{textAlign: 'left', marginTop: '2rem'}} >
                    {
                        showLocations ?
                        locations.map((location,i) => (
                            <Location key={i} onClick={() => {setLoc(`${location.city}, ${location.country}`); setshowLocations(false);}}><RoomIcon /> {location.city}, {location.country}</Location>
                        ))
                        : null
                    }
                    </div>
                    <div style={{textAlign: 'left', marginTop: '2rem'}} >
                        {
                            showGuestMenu ? 
                            <>
                                <AddGuests type="Adults" desc="Ages 13 or above" count={adults} inc={() => setAdults(t => t+1)} dec={() => setAdults(t => {return (t>0 ? t-1 : 0)})} />
                                <AddGuests type="Children" desc="Ages 2-12" count={child} inc={() => setChild(t => t+1)} dec={() => setChild(t => {return (t>0 ? t-1 : 0)})} />
                            </>
                            :null
                        }
                    </div>
                </FilterMenu>
            </FilterMenuWrapper>
    )
}

export default Filter
