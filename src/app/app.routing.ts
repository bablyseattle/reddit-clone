import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FoodComponent } from './food/food.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'food',
    component: FoodComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
