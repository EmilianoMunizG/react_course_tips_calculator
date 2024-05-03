import './App.css'
import { MenuItem } from './components/menuItem'
import { menuItems } from './data/db'

function App() {
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
        />
      ))}
      </div>

      </div>

      <div>
      <h2>Total</h2>

      </div>
      
      
    </main>
    </>
  )
}

export default App
