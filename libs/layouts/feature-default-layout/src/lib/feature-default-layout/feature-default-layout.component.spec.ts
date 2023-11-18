import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureDefaultLayoutComponent } from './feature-default-layout.component';

describe('FeatureDefaultLayoutComponent', () => {
  let component: FeatureDefaultLayoutComponent;
  let fixture: ComponentFixture<FeatureDefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDefaultLayoutComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
