export function formatCurrency( qty : number ) {
    return Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(qty)
}