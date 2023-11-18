import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureHomeComponent } from './feature-home.component';

describe('FeatureHomeComponent', () => {
  let component: FeatureHomeComponent;
  let fixture: ComponentFixture<FeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHomeComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
