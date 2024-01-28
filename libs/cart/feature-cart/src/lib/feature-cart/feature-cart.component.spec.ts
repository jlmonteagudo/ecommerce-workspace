import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCartComponent } from './feature-cart.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureCartComponent', () => {
  let component: FeatureCartComponent;
  let fixture: ComponentFixture<FeatureCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FeatureCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
