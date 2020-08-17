const name = 'Alexandre'
const age = 25

const user = {
    name: name,
    userAge: age,
    location: "Sao Paulo"
}

const product = {
    label: "red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

//we can also use rename and default value during destructuring
const { label: labelName, price, stock, salePrice, rating = 5 } = product

console.log(labelName, price, stock, salePrice, rating)

const transaction = (type, { price, stock }) => {

}

transaction('sale', product)