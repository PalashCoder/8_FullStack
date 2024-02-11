"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from './Button'

const SearchForm = () => {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [travelmode, setTravelMode] = useState("");
  const [numdays, setNumDays] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [transportation, setTransportation] = useState("");
  const [activities, setActivities] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <center className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <form>
        <div>
          <label className='mx-10'>
            <span>Destination:</span>
            <input required type='text' onChange={(e) => setDestination(e.target.value)} value={destination} className='border-2'/>
          </label>
          <label>
            <span>Budget:</span>
            <input required type='text' onChange={(e) => setBudget(e.target.value)} value={budget} />
          </label>
          <label>
            <span>Source City:</span>
            <input required type='text' onChange={(e) => setCity(e.target.value)} value={city} />
          </label>
        </div>
        <div>
          <label>
            <span>Travelling Mode:</span>
            <input required type='text' onChange={(e) => setTravelMode(e.target.value)} value={travelmode} />
          </label>
          <label>
            <span>Number of Days:</span>
            <input required type='text' onChange={(e) => setNumDays(e.target.value)} value={numdays} />
          </label>
          <label>
            <span>Transportation:</span>
            <input required type='text' onChange={(e) => setTransportation(e.target.value)} value={transportation} />
          </label>
        </div>
        <label>
          <span>Acommodation Type (e.g., Budget Hotel,Luxury Resort, Homestay):</span>
          <input required type='text' onChange={(e) => setAccomodation(e.target.value)} value={accomodation} />
        </label>
        <label>
          <span>Preferred activities:</span>
          <input required type='text' onChange={(e) => setActivities(e.target.value)} value={activities} />
        </label>
        <Button
          type="button"
          title="Let's Start the Journey"
          variant="btn_green" />
      </form>
    </center>
  )
}

export default SearchForm