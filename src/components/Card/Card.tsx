import React from 'react'
import './card.css'

interface car {
    id: number
    carName: string
    value: number
    year: number
    inclusion: string
    picture: string
}


export default function Card (props: car){
  return (
    <div className='main-card-div'>
        <div className='card-div'>
            <h1>{props.carName}</h1>
            <img src={props.picture} alt='Imagem do Carro' />
            <h2>R$ {props.value}</h2>
            <p>Ano: {props.year}</p>
            <p id='cadastrado'>cadastrado em {props.inclusion}</p>
        </div>
    </div>
  )
}
