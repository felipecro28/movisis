import './card.css'
import { car } from '../../services/interfaces/car'
import { ShopCartContext } from '../../context/ShopCart'
import { useContext } from 'react'



export default function Card (props: car){
  const date = new Date(props.inclusion)
  const { products, setProducts } = useContext(ShopCartContext)

  return (
    <div className='main-card-div'>
        <div className='card-div'>
            <h1>{props.carName}</h1>
            <img src={props.picture} alt='Imagem do Carro' />
            <h2>R$ {props.value}</h2>
            <p>Ano: {props.year}</p>
            <p id='cadastrado'>{`cadastrado em ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</p>
            <button type='button' onClick={(e) => {
              const car = []
              car.push(props)
              setProducts([...products, ...car])
              console.log(products)
            }}>Adicionar ao carrinho</button>
        </div>
    </div>

  )
}
