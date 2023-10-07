const {faker} = require("@faker-js/faker")

class UsersService {

  constructor(){
    this.users = []
    this.generate()
  }

  generate() {
  const limit = 5
  for (let index = 0; index < limit; index++) {
    this.users.push({
      id: faker.datatype.uuid(),
      name: faker.person.fullName(),
    })

  }
  }

  create(users){
    this.users.push(users)
  }

  find() {
    return this.users
  }

  findOne(id){
    return this.users.find(item => item.id === id)
  }

  update(){

  }

  delete(){

  }
}

module.exports = UsersService
