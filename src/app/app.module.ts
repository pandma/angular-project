import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './componets/users/users.component';
import { ProductsComponent } from './componets/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
