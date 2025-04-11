import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DescProdutosComponent } from './produtos/desc-produtos/desc-produtos.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'proway-computers/produtos', component: ProdutosComponent},
    {path: 'proway-computers/produtos/:id', component: DescProdutosComponent},
    {path: 'proway-computers/carrinho', component: CartComponent},
    {path: 'proway-computers/contato', component: ContactComponent},
    {path: "", redirectTo: "proway-computers/produtos", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
