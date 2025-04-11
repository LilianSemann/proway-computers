import { Component } from '@angular/core';
import { SearchBoxComponent } from "../search-box/search-box.component";
import { CartService } from '../services/cart.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [SearchBoxComponent, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hidden = false;

  constructor (
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.getCart().length > 0 ? this.hidden = false : this.hidden = true
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
