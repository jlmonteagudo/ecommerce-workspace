import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterComponent } from '../list-filter/list-filter.component';
import { PriceFilterComponent } from '../price-filter/price-filter.component';
import { SizeFilterComponent } from '../size-filter/size-filter.component';
import { ColorFilterComponent } from '../color-filter/color-filter.component';

@Component({
  selector: 'ecommerce-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ListFilterComponent,
    PriceFilterComponent,
    SizeFilterComponent,
    ColorFilterComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  readonly categories = [
    { name: 'Bedroom', count: 15 },
    { name: 'Sofa', count: 5 },
    { name: 'Office', count: 8 },
    { name: 'Outdoor', count: 10 },
  ];

  readonly brands = [
    { name: 'Dominik', count: 15 },
    { name: 'Karl', count: 5 },
    { name: 'Maxing', count: 8 },
    { name: 'Zara', count: 10 },
  ];

  readonly sizes = ['xs', 's', 'm', 'l', 'xl'];

  readonly colors = [
    { name: 'White', code: 'white' },
    { name: 'Black', code: 'black' },
    { name: 'Red', code: 'red' },
  ];
}
