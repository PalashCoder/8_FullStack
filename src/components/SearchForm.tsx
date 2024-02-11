"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from './Button'
import Link from 'next/link'

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
  const handleSubmit=()=>{
    console.log(destination,budget,city,travelmode,numdays,accomodation,transportation,activities);
  }
  return (
    <center className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <form className='gap-5'>
        <div className='my-[40px]'>
          <div>
            <label className='m-10 my-[40px]'>
              <span>Destination:</span>
              <input required type='text' onChange={(e) => setDestination(e.target.value)} value={destination} className='border-2' />
            </label>
            <label className='m-10'>
              <span>Budget:</span>
              <input required type='text' onChange={(e) => setBudget(e.target.value)} value={budget} className='border-2' />
            </label>
            <label className='m-10'>
              <span>Source City:</span>
              <input required type='text' onChange={(e) => setCity(e.target.value)} value={city} className='border-2' />
            </label>
          </div>
          <div>
            <label className='m-10'>
              <span>Travelling Mode:</span>
              <input required type='text' onChange={(e) => setTravelMode(e.target.value)} value={travelmode} className='border-2' />
            </label>
            <label className='m-10'>
              <span>Number of Days:</span>
              <input required type='text' onChange={(e) => setNumDays(e.target.value)} value={numdays} className='border-2' />
            </label>
            <label className='m-10'>
              <span>Transportation:</span>
              <input required type='text' onChange={(e) => setTransportation(e.target.value)} value={transportation} className='border-2' />
            </label>
          </div>
          <label className='m-10'>
            <span>Acommodation Type:</span>
            <input required type='text' onChange={(e) => setAccomodation(e.target.value)} value={accomodation} placeholder=' Budget Hotel,Luxury Resort' className='border-2' />
          </label>
          <label className='m-10'>
            <span>Preferred activities:</span>
            <input required type='text' onChange={(e) => setActivities(e.target.value)} value={activities} className='border-2' />
          </label>
        </div>
        {/* <Link href='/result' className='mt-[10px] md: w-max'> */}
          <button type="submit" onSubmit={handleSubmit} className='w-[110px] h-10 font-semibold text-white rounded-xl bg-[#008000]'> Let's Travel</button>
        {/* </Link> */}
      </form>
    </center>
  )
}

export default SearchForm