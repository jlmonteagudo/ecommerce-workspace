import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '@ecommerce/layouts/default-layout';

@Component({
  standalone: true,
  imports: [RouterModule, DefaultLayoutComponent],
  selector: 'ecommerce-root',
  template: ` <ecommerce-default-layout /> `,
})
export class AppComponent {}
