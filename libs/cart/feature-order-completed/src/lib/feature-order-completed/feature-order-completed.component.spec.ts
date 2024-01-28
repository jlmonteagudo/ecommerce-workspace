import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrderCompletedComponent } from './feature-order-completed.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureOrderCompletedComponent', () => {
  let component: FeatureOrderCompletedComponent;
  let fixture: ComponentFixture<FeatureOrderCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FeatureOrderCompletedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrderCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
