import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcreateComponent } from './dcreate.component';

describe('DcreateComponent', () => {
  let component: DcreateComponent;
  let fixture: ComponentFixture<DcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
