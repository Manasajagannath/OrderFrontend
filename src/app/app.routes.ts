import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:"BookBarn"},
    {path:'cart',component:CartComponent,title:"cart"},

    {path:'order',component:OrderComponent,title:"Order"}

];
