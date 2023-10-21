import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { SubFooterComponent } from '../sub-footer/sub-footer.component';

@Component({
  selector: 'ecommerce-footer',
  standalone: true,
  imports: [CommonModule, SocialIconsComponent, SubFooterComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
