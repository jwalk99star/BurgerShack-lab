import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  getBurgers() {
    return FakeDb.burgers
  }

  createBurger(burgerData) {
    burgerData.id = (Math.floor(Math.random() * 100))

    FakeDb.burgers.push(burgerData)

    return burgerData
  }

}

export const burgersService = new BurgersService()












// getBurgerById(burgerId) {
//   const foundBurger = FakeDb.burgers.find(burger => burger.id == burgerId)
//   if (!foundIndex == -1) {
//     throw new BadRequest(`${burgerId} was not a valid Id`)
//   }
//   return foundBurger  
// }