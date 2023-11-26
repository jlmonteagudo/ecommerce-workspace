import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecommerce-image-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <img [src]="selectedProductImageUrl" class="w-full" />
    </div>
    <div class="grid grid-cols-5 gap-4 mt-4">
      <div *ngFor="let productImageUrl of productImagesUrls">
        <img
          [src]="productImageUrl"
          class="w-full cursor-pointer border"
          [ngClass]="{
            'border-primary': selectedProductImageUrl === productImageUrl
          }"
          (click)="selectedProductImageUrl = productImageUrl"
        />
      </div>
    </div>
  `,
})
export class ImageViewerComponent {
  public selectedProductImageUrl!: string;

  private _productImagesUrls!: string[];

  @Input({ required: true })
  set productImagesUrls(value: string[]) {
    this._productImagesUrls = value;
    this.selectedProductImageUrl = value[0];
  }
  get productImagesUrls() {
    return this._productImagesUrls;
  }
}
