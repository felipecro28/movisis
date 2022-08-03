import './main.css'
import Header from '../Header/Header'
import cars from '../../assets/car.png'
import { Link } from 'react-router-dom'

export default function MainSection
  () {
  return (
    <div className='main-div'>
      <Header />
      <div className='main-text'>
        <h1>Compre seu carro hoje mesmo </h1>
        <p>Os melhores veículos - o melhor preço do mercado</p>
      </div>

      <section className='second-text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut porttitor leo a diam sollicitudin. Nibh praesent tristique magna sit amet purus. Quam id leo in vitae.
           Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Purus gravida quis blandit turpis cursus in hac habitasse. 
           Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Pharetra sit amet aliquam id diam. Mauris rhoncus aenean vel elit 
           scelerisque mauris pellentesque pulvinar. Nulla facilisi nullam vehicula ipsum a arcu. Eget velit aliquet sagittis id consectetur purus ut 
           faucibus pulvinar. Justo laoreet sit amet cursus sit amet dictum.
        </p>
        <img src={cars} alt='Imagem contendo carros'/>
      </section>

      <Link style={{textDecoration:'none', color: '#010101'}} to='/cars'><p className='comprar-agora'>Comprar agora!</p></Link>
    </div>
  )
}
