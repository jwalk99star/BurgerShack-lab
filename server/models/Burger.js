export class Burger {
  constructor(data) {
    this.id = (Math.floor(Math.random() * 100))
    this.name = data.name
    this.cheese = data.cheese
    this.sauce = data.sauce
    this.hasMeat = data.hasMeat || false
    this.price = data.price
  }
}

