import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '@ecommerce/layout-default';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutDefaultComponent],
  selector: 'ecommerce-root',
  template: `
    <ecommerce-layout-default />
    <!-- <router-outlet></router-outlet> -->
  `,
})
export class AppComponent {
  title = 'ecommerce-ng';
}
