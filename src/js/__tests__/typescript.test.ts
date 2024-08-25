const { Cart } = require('./typescript.ts'); 

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotalPrice', () => {
    it('should return 0 for an empty cart', () => {
      expect(cart.getTotalPrice()).toBe(0);
    });

    it('should return the correct total price for a cart with items', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.addItem({ id: 2, price: 20 });
      expect(cart.getTotalPrice()).toBe(30);
    });
  });

  describe('getTotalPriceWithDiscount', () => {
    it('should return the correct total price with a discount', () => {
      cart.addItem({ id: 1, price: 100 });
      expect(cart.getTotalPriceWithDiscount(10)).toBe(90);
    });

    it('should return 0 if the discount is 100%', () => {
      cart.addItem({ id: 1, price: 100 });
      expect(cart.getTotalPriceWithDiscount(100)).toBe(0);
    });
  });

  describe('removeItem', () => {
    it('should remove the correct item from the cart', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.addItem({ id: 2, price: 20 });
      cart.removeItem(1);
      expect(cart.getItems()).toEqual([{ id: 2, price: 20 }]);
    });

    it('should do nothing if the item does not exist', () => {
      cart.addItem({ id: 1, price: 10 });
      cart.removeItem(3);
      expect(cart.getItems()).toEqual([{ id: 1, price: 10 }]);
    });
  });
});