import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCrudComponent } from './string-crud.component';

describe('StringCrudComponent', () => {
  let component: StringCrudComponent;
  let fixture: ComponentFixture<StringCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
