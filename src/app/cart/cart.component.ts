import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICart } from '../products';
import { FormsModule } from '@angular/forms';
import { NotifService } from '../services/notif.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: ICart[] = [];
  total: number = 0;

  constructor (
    private cartService: CartService,
    private notifyService: NotifService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
    this.calculateTotal()
  }

  removeItem(item: ICart) {
    this.cartService.removeFromCart(item.id)
    this.cart = this.cart.filter(i => i.id !== item.id)
    this.calculateTotal()
  }

  calculateTotal() {
    this.total = this.cart.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
    this.cartService.updateCart(this.cart)
  }

  buyItems() {
    this.notifyService.notify("Itens comprados!")
    this.cart = [];
    this.cartService.cleanCart();
    this.calculateTotal();
  }
}
