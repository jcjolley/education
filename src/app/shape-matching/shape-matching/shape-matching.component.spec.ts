import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeMatchingComponent } from './shape-matching.component';

describe('ShapeMatchingComponent', () => {
  let component: ShapeMatchingComponent;
  let fixture: ComponentFixture<ShapeMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
