class Movie {
  constructor(
    title: string,
    originalTitle: string,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    duration: number
  ) {
    this.title = title;
    this.originalTitle = originalTitle;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
  }

  toString(): string {
    return 
      Название: ${this.title}
      Оригинальное название: ${this.originalTitle}
      Год: ${this.year}
      Страна: ${this.country}
      Слоган: ${this.slogan}
      Жанр: ${this.genre}
      Длительность: ${this.duration}
    ;
  }
};


  ////////
class Cart {
  private items: { id: number; price: number }[] = [];

  addItem(item: { id: number; price: number }): void {
    this.items.push(item);
  }

  getItems(): { id: number; price: number }[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    const totalPrice = this.getTotalPrice();
    return totalPrice - (totalPrice * discount) / 100;
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}


module.exports = {
    Cart
  };