import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ecommerce-feature-order-completed',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-order-completed.component.html',
  styleUrls: ['./feature-order-completed.component.css'],
})
export class FeatureOrderCompletedComponent {}
