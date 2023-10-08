const {faker} = require("@faker-js/faker")

class ProductsService {

  constructor(){
    this.products = []
    this.generate()
  }

  async generate() {
  const limit = 100
  for (let index = 0; index < limit; index++) {
    this.products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })

  }
  }

  create(productProps){
    const product = {id:faker.datatype.uuid(), ...productProps}
    this.products.push(product)
    return product
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000);
    })

  }

  async findOne(id){
    const product = this.products.find(item => item.id === id)
    return product
  }

  async update(id, change){
    const productPosition = this.products.findIndex(item => item.id === id)
    if (productPosition === -1) {
      throw new Error('the id provided does not exist')
    }
    const product = this.products[productPosition]
    this.products[productPosition] = {...product, ...change}
    return this.products[productPosition]
  }

  async delete(id){
    const productPosition = this.products.findIndex(item => item.id === id)
    this.products.splice(productPosition,1)
    return {id, message:'element deleted succesfully'}
  }
}

module.exports = ProductsService
