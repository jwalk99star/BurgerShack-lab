import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
    new Burger(
      {
      name: 'Heartburn Burger',
      cheese: 'Pepperjack',
      sauce: 'Burn Me',
      hasMeat: 'true',
      price: 8
    }),
    {
      name: 'Basic Burger',
      cheese: 'Cheddar',
      sauce: 'Ketchup',
      hasMeat: 'true',
      price: 7
    },
    {
      name: 'Green Burger',
      cheese: 'Green',
      sauce: 'Pickle Relish',
      hasMeat: 'false',
      price: 7
    },
   
  ]
}