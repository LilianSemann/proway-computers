import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DescProdutosComponent } from './produtos/desc-produtos/desc-produtos.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'produtos', component: ProdutosComponent},
    {path: 'produtos/:id', component: DescProdutosComponent},
    {path: 'carrinho', component: CartComponent},
    {path: 'contato', component: ContactComponent},
    {path: "", redirectTo: "produtos", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
