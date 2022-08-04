import './cars.css'
import Card from '../Card/Card'
import Header from '../Header/Header'
import { api } from '../../services/api/fake-api'
import Form from '../form/Form'
import { useEffect, useState } from 'react'
import { CarModel } from '../../models/CarModel'

export default function Cars() {

  const [filtered, setFiltered] = useState<boolean>(false)
  const [apiCopy, setApiCopy] = useState<CarModel[]>([...api])


  return (
    <div className='cars-div'>
      <Header />
      <Form
      onSubmit={(minValue, maxValue) => {
        console.log(minValue)
        setApiCopy(api.filter(car => car.value >= minValue && car.value <= maxValue))
        return apiCopy}
      }
      />

      <div className='cards-div'>
        {apiCopy.map(car => <Card 
        key={car.id}
        id={car.id}
        carName={car.carName}
        picture={car.picture}
        value={car.value}
        year={car.year}
        inclusion={car.inclusion}
        />)}
      </div>
    </div>
  )
}
