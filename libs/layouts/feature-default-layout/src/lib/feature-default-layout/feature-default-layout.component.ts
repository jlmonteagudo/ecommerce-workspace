import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { HeaderComponent } from '../ui/header/header.component';

@Component({
  selector: 'ecommerce-default-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, HeaderComponent],
  template: `
    <ecommerce-header />
    <ecommerce-navbar />
    <router-outlet />
  `,
})
export class FeatureDefaultLayoutComponent {}
