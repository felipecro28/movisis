import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api/fake-api";
import { car } from "../services/interfaces/car";


type ShopCartContextProps = {
    children: ReactNode
}

interface ProductContextValue {
    products: car[];
    setProducts: (data: car[]) => void;
}

const initialCarValue: ProductContextValue = {
    products: []
    ,
    setProducts: data => { }
}


export const ShopCartContext = createContext<ProductContextValue>(initialCarValue)


export const UseShopProvider = ({ children }: ShopCartContextProps) => {
    const [products, setProducts] = useState<car[]>([])



    return (
        <ShopCartContext.Provider value={{ products, setProducts }}>
            {children}
        </ShopCartContext.Provider>
    )
}

