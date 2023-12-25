import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { HeaderComponent } from '../ui/header/header.component';
import { FooterComponent } from '../ui/footer/footer.component';
import { MobileNavbarComponent } from '../ui/mobile-navbar/mobile-navbar.component';
import { MobileSidebarComponent } from '../ui/mobile-sidebar/mobile-sidebar.component';

@Component({
  selector: 'ecommerce-default-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MobileNavbarComponent,
    MobileSidebarComponent,
  ],
  template: `
    <ecommerce-header />
    <ecommerce-navbar />
    <ecommerce-mobile-navbar
      (showMobileSidebar)="onShowMobileSidebar($event)"
    />
    <ecommerce-mobile-sidebar
      (showMobileSidebar)="onShowMobileSidebar($event)"
      *ngIf="showMobileSidebar"
    />
    <router-outlet />
    <ecommerce-footer />
  `,
})
export class DefaultLayoutComponent {
  showMobileSidebar = false;

  onShowMobileSidebar(value: boolean) {
    this.showMobileSidebar = value;
  }
}
