const {faker} = require("@faker-js/faker")

class CategoriesService {

  constructor(){
    this.categories = []
    this.generate()
  }

  generate() {
  const limit = 5
  for (let index = 0; index < limit; index++) {
    this.categories.push({
      id: faker.datatype.uuid(),
      name: faker.word.words(),
    })

  }
  }

  create(categorie){
    this.categories.push(categorie)
  }

  find() {
    return this.categories
  }

  findOne(id){
    return this.categories.find(item => item.id === id)
  }

  update(){

  }

  delete(){

  }
}

module.exports = CategoriesService
