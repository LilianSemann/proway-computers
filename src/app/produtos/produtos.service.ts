import { Injectable } from '@angular/core';
import { IProducts, products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private products: IProducts[] = products;

  constructor() { }

  getAll() {
    return this.products;
  }

  getOne(productId: number) {
    return this.products.find(product => product.id == productId);
  }
}
