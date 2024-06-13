import { useState } from "react"
import { OrderItem, menuItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: menuItem) => {
        
        const itemExist = order.find( orderItem =>  orderItem.id === item.id  )
        if(itemExist){
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, qty: orderItem.qty+1} : orderItem)
            setOrder(updatedOrder)
        } else {
            const newOrderItem = {...item, qty: 1}
            setOrder([...order, newOrderItem])
        }


    }

    const removeItem = (id : menuItem['id']) => {
        setOrder(order.filter(item => item.id !== id)) 
    }

    const saveOrder = () => {
        setOrder([])
        setTip(0)
    }

    
    console.log(order)

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        saveOrder
    }
}