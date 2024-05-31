import { formatCurrency } from "../helpers"
import { OrderItem, menuItem } from "../types"

type orderContentProps = {
    order: OrderItem[],
    removeItem : (id : menuItem['id']) => void
}

export default function OrderContent({order, removeItem} : orderContentProps) {
  return (
    <div>
        <h1 className='font-black text-4xl'>Consumo</h1>
        <div className="space-y-3 mt-3">
            {
            order.length === 0 
            ? <p>La orden esta vacia</p> 
            : (
                order.map( item => (
                    <div key={item.id} className="flex justify-between items-center border-t-2 border-b-gray-200 py-5 last-of-type:border-b">
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantiad: {item.qty} - {formatCurrency(item.price*item.qty)}
                            </p>
                        </div>
                        
                        <button 
                        className="bg-red-800 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
            )
            }
        </div>
    </div>
  )
}
