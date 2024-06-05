import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAllComponent } from './results-all.component';

describe('ResultsAllComponent', () => {
  let component: ResultsAllComponent;
  let fixture: ComponentFixture<ResultsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
