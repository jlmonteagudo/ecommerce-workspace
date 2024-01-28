import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutComponent } from './feature-checkout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureCheckoutComponent', () => {
  let component: FeatureCheckoutComponent;
  let fixture: ComponentFixture<FeatureCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FeatureCheckoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
