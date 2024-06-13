import './App.css'
import { MenuItem } from './components/menuItem'
import OrderContent from './components/orderContent'
import OrderTotal from './components/orderTotal'
import TipPercentageForm from './components/TipPercentageForm'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
 
function App() {

  const {order, addItem, removeItem, tip, setTip, saveOrder } = useOrder()

  return (
  
    <> 
    <header className='bg-amber-400'>
      <h1 className='font-black py-5 text-amber-800 text-center text-4xl'>Tips Calculator</h1>
    </header>

    <main className='max-w-7xl py-20 mx-auto grid md:grid-cols-2'>
      <div className='p-5'>
      <h2 className='text-4xl font-black text-amber-800'>Menu</h2>
      <div className='space-y-3 mt-10'>
      {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        addItem={addItem}
        />
      ))}
      </div>

      </div>

      <div className='border border-dashed border-slate-500 p-5 rounded-lg space-y-10'>
        <OrderContent
          order={order}
          removeItem={removeItem}
        />  
        <TipPercentageForm
          setTip={setTip}
          tip={tip}
        />
        <OrderTotal
          order={order}
          tip={tip}
          saveOrder={saveOrder}
        />
      </div>      
    </main>
    </>
  )
}

export default App
