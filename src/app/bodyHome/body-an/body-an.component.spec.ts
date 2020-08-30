import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAnComponent } from './body-an.component';

describe('BodyAnComponent', () => {
  let component: BodyAnComponent;
  let fixture: ComponentFixture<BodyAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
