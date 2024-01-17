const products = [
    {
        id: '1',
        name: 'JBL Wave Buds',
        price: 45,
        category: 'auricular',
        img: 'src/components/Item/assets/jblwavebuds.png',
        stock: 25,
    },
    { id: '2', name: 'JBL Flip6', price: 99, category: 'parlante', img: 'src/components/Item/assets/jblflip6.webp', stock: 12 },
    { id: '3', name: 'PartyBox710', price: 699, category: 'partybox', img: 'src/components/Item/assets/jblpartybox710.png', stock: 9 }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}