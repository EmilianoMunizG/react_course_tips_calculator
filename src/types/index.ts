export type menuItem = {
    "id": number,
    "name": String,
    "price": number
}


export type OrderItem = menuItem & {
    qty: number
}