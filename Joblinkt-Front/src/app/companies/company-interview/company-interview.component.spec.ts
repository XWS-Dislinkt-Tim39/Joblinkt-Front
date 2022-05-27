import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInterviewComponent } from './company-interview.component';

describe('CompanyInterviewComponent', () => {
  let component: CompanyInterviewComponent;
  let fixture: ComponentFixture<CompanyInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
