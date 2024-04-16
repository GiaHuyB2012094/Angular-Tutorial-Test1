import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListComponent,
    WishListItemComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
