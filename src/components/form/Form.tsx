import './form.css'
import { useState } from 'react'


interface formProps {
    onSubmit: (value1: number, value2: number, select: string) => void
}

export default function Form(props: formProps) {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(100000)
    const [select, setSelect] = useState<string>('menor-valor')

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
                    <select name="ordenar" id="ordenar" value={select} onChange={(e) => setSelect(e.target.value)}>
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
                props.onSubmit(minValue, maxValue, select)
            }}>Filtrar</button>
        </form>
    )
}
