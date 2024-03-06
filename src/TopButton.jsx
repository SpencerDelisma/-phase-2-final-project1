import React from 'react'

function TopButton() {
 const cities =[
  {
    id:1,
    title:'NEW YORK'
  },
  {
    id:2,
    title:'LONDON'
  },
  {
    id:3,
    title:'SHANGHAI'
  },
  {
    id:4,
    title:'PARIS'
  },
  {
    id:5,
    title:'SYDNEY'
  }
 ]



  return (
      <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(


         <button key={city.id}className="text-white text-lg font-medium">{city.title}</button>

        ))}
      </div>
  )
}

export default TopButton