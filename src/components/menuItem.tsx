import { menuItem } from "../types"

type MenuItemProps = {
    item: menuItem,
    addItem: (item : menuItem) => void
} 

export const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <>
        <button className="border-2 border-amber-800 hover:bg-amber-400 p-3 w-full flex justify-between"
         onClick={() => addItem(item)}>
            <h1>{item.name}</h1>
            <p className="font-black">${item.price}</p>
        </button>
    </>
  )
}
