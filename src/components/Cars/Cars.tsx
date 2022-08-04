import './cars.css'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Form from '../form/Form'
import { api } from '../../services/api/fake-api'
import { useState } from 'react'
import { orderArray } from '../../services/functions/functions'
import { car } from '../../services/interfaces/car'


export default function Cars() {


  const [apiCopy, setApiCopy] = useState<car[]>([...api])

  return (
    <div className='cars-div'>
      <Header />
      <Form
        onSubmit={(minValue, maxValue, select) => {
          setApiCopy(orderArray(select, api))
          return setApiCopy(api.filter(car => car.value >= minValue && car.value <= maxValue)
          )
        }}
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
