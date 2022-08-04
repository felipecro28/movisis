import './form.css'
import { useState } from 'react'
import { CarModel } from '../../models/CarModel'


interface formProps {
    onSubmit: (value1: number, value2: number) => CarModel[]
}

export default function Form(props : formProps) {


    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    return (
        <form>
            <h1>Filtrar</h1>


            <section>

                <div className='preco-input'>
                    <p>Preço</p>
                    <div className='labels-preco-div'>
                        <label htmlFor="de">De:</label>
                        <input value={minValue} onChange={e => setMinValue(+e.target.value)} type="number" name='de' />

                        <label htmlFor="ate"> Até:</label>
                        <input value={maxValue} onChange={e => setMaxValue(+e.target.value)} type="number" name='ate' />
                    </div>
                </div>

                <div className='ordenar-input'>
                    <label htmlFor='ordenar'>Ordenar:</label>
                    <select name="ordenar" id="ordenar">
                        <optgroup label="Por Valor:">
                            <option value="maior-valor">Maior valor</option>
                            <option value="menor-valor">Menor valor</option>
                        </optgroup>
                        <optgroup label="Por Data:">
                            <option value="mais-recente">Mais recente</option>
                            <option value="menos-recente">Menos recente</option>
                        </optgroup>
                    </select>
                </div>
            </section>
            <button onClick={(e) => {
                e.preventDefault()
                props.onSubmit(minValue, maxValue)
            }}>Filtrar</button>
        </form>
    )
}
