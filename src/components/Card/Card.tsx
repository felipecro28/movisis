import './card.css'
import { car } from '../../services/interfaces/car'



export default function Card (props: car){
  const date = new Date(props.inclusion)

  return (
    <div className='main-card-div'>
        <div className='card-div'>
            <h1>{props.carName}</h1>
            <img src={props.picture} alt='Imagem do Carro' />
            <h2>R$ {props.value}</h2>
            <p>Ano: {props.year}</p>
            <p id='cadastrado'>{`cadastrado em ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>
    </div>
  )
}
