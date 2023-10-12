import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureDefaultLayoutComponent } from '@ecommerce/feature-default-layout';

@Component({
  standalone: true,
  imports: [RouterModule, FeatureDefaultLayoutComponent],
  selector: 'ecommerce-root',
  template: ` <ecommerce-feature-default-layout /> `,
})
export class AppComponent {}
