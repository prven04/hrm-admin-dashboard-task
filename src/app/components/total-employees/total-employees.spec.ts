import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEmployees } from './total-employees';

describe('TotalEmployees', () => {
  let component: TotalEmployees;
  let fixture: ComponentFixture<TotalEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
