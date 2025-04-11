import { Component } from '@angular/core';
import { ICart, IProducts } from '../../products';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NotifService } from '../../services/notif.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-desc-produtos',
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './desc-produtos.component.html',
  styleUrl: './desc-produtos.component.css'
})
export class DescProdutosComponent {
  product: IProducts | undefined
  stock = 1

  constructor (
    private productsService: ProdutosService,
    private route: ActivatedRoute,
    private notifyService: NotifService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notifyService.notify(this.product?.desc + " foi adicionado ao carrinho.")
    const addProduct: ICart = { ...this.product!, quantity: this.stock };
    this.cartService.addCart(addProduct)
  }
}
