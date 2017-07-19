import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStringComponent } from './create-string.component';

describe('CreateStringComponent', () => {
  let component: CreateStringComponent;
  let fixture: ComponentFixture<CreateStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
