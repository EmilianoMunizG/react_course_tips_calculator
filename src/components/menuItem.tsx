import { menuItem } from "../types"

type MenuItemProps = {
    item: menuItem
} 

export const MenuItem = ({item} : MenuItemProps) => {
  return (
    <>
        <button className="border-2 border-amber-800 hover:bg-amber-400 p-3 w-full flex justify-between">
            <h1>{item.name}</h1>
            <p className="font-black">${item.price}</p>
        </button>
    </>
  )
}
