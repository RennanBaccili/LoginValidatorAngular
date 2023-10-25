import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { AdminRoutingModule } from './admin-routing.module';
// components
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[HomeComponent]
})
export class AdminModule { }
