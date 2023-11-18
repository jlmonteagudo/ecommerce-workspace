import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewArrivalsListComponent } from './new-arrivals-list.component';

describe('NewArrivalsListComponent', () => {
  let component: NewArrivalsListComponent;
  let fixture: ComponentFixture<NewArrivalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArrivalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
