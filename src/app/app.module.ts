import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetasListComponent } from './recetas/recetas-list/recetas-list.component';
import { RecetasItemComponent } from './recetas/recetas-list/recetas-item/recetas-item/recetas-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, RecetasComponent, RecetasListComponent, RecetasItemComponent, ShoppingListComponent, ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
