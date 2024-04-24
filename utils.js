// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return (w * h)
}

const perimeter = (w, h) => {
  // should return the perimeter
  return (2 * (w + h))
}

const circleArea = r => {
  // should return the area of the circle
  return (Math.PI * r * r)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  shoppingCart.pop(item)
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}

// ========================================================
// Stretch Challenges
// ========================================================
const updateCart = (item, quantity) => {
  // should update the quantity of item in cart
  item.quantity = quantity
}

const validateCart = () => {
  // should return true if the cart is empty
  return shoppingCart.length === 0
}

const cartTotal = () => {
  // should return the total cost of all items in cart
  return shoppingCart.sum(item => item.price)
}