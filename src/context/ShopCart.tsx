import { createContext, ReactNode, useContext, useState } from "react";
import { car } from "../services/interfaces/car";


type ShopCartContextProps = {
    children: ReactNode
}

type ShopCartType = {
    products: car[],
    setProducts: (newProduct :[...car[], ...[]]) => void
}

const ProductType = {
    products: [],
    setProducts: () => {}
}

export const ShopCartContext = createContext<ShopCartType>(ProductType)



export const UseShopProvider = ({ children }: ShopCartContextProps) => {
    const [products, setProducts] = useState([])
    
    return (
        <ShopCartContext.Provider value={{ products, setProducts }}>
            {children}
        </ShopCartContext.Provider>
    )
}

