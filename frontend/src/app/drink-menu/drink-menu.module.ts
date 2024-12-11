import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkMenuPageRoutingModule } from './drink-menu-routing.module';

import { DrinkMenuPage } from './drink-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkMenuPageRoutingModule
  ],
  declarations: [DrinkMenuPage]
})
export class DrinkMenuPageModule {}
