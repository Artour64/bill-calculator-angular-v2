import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPerPersonComponent } from './results-per-person.component';

describe('ResultsPerPersonComponent', () => {
  let component: ResultsPerPersonComponent;
  let fixture: ComponentFixture<ResultsPerPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPerPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultsPerPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
