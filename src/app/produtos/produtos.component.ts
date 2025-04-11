import { Component } from '@angular/core';
import { IProducts } from '../products';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './produtos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  products: IProducts[] | undefined;

  constructor(
    private productsService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const products = this.productsService.getAll()
    this.route.queryParamMap.subscribe(params => {
      const description = params.get('desc')?.toLowerCase();

      if (description) {
        this.products = products.filter(produto => produto.desc.toLowerCase().includes(description))
        return
      }

      this.products = products
    })
  }

}
