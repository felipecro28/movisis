import Header from '../Header/Header'
import './carrinho.css'
import { ShopCartContext } from '../../context/ShopCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'


export default function ShopCart() {

  const { products, setProducts } = useContext(ShopCartContext)
  const productsCopy = [...products]

  function removeItem(index: number) {
    productsCopy.splice(index, 1)
    return setProducts([...productsCopy])
}

console.log(products)
  

  return (
    <div className='main-cart-div'>
      <Header />
      {productsCopy.length > 0 ?
        <div className='filled-cart'>
          <h2>Boas vindas ao seu carrinho</h2>
          {productsCopy.map((product, index) => 
          <div className='cart-div' key={product.id}>
            <img src={product.picture} />
            <h2>{product.carName}</h2>
            <h2>R$ {product.value}</h2>
            <div onClick={(e) => removeItem(index)}>
            <MdDeleteForever id='cart-icon'/>
            </div>
          </div>)}
          <div className='total-div'>
            <p>{products.length} veículos em seu carrinho</p>
            <h3>Total: R$ {products.map((car, index) => car.value).reduce((prev, curr) => prev + curr, 0)}</h3>
            <button onClick={(e) => {
              e.preventDefault()
              alert('Compra finalizada com sucesso!')
              setProducts([])
            }}>Finalizar Compra</button>
          </div>
        </div> :
        <div className='empty-cart'>
          <h2> O seu carrinho de compras está vazio </h2>
          <Link to='/cars'><p>Ir à loja</p></Link>
        </div>
      }
    </div>
  )
}
