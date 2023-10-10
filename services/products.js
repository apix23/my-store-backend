const {faker} = require("@faker-js/faker")
const boom = require("@hapi/boom")

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
      image: faker.image.imageUrl(),
      isBlock: faker.datatype.boolean()
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
      }, 2000);
    })

  }

  async findOne(id){
    const product = this.products.find(item => item.id === id)
    if (!product) {
      throw boom.notFound('product not found')
    }
    if(product.isBlock){
      throw boom.conflict('product is block')
    }
    return product
  }

  async update(id, change){
    const productPosition = this.products.findIndex(item => item.id === id)
    if (productPosition === -1) {
      throw boom.notFound('product not found')
    }
    const product = this.products[productPosition]
    this.products[productPosition] = {...product, ...change}
    return this.products[productPosition]
  }

  async delete(id){
    const productPosition = this.products.findIndex(item => item.id === id)
    if (productPosition === -1) {
      throw boom.notFound('product not found')
    }
    this.products.splice(productPosition,1)
    return {id, message:'element deleted succesfully'}
  }
}

module.exports = ProductsService
