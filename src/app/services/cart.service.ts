import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ICart } from '../products';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: ICart[] = [];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const storedItems = localStorage.getItem('cart');
      this.items = storedItems ? JSON.parse(storedItems) : [];
    }
  }

  getCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  updateCart(cart: ICart[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  addCart(product: ICart) {
    this.items.push(product)
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  removeFromCart(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId)
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}
