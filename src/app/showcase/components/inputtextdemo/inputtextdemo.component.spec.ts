import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtextdemoComponent } from './inputtextdemo.component';

describe('InputtextdemoComponent', () => {
  let component: InputtextdemoComponent;
  let fixture: ComponentFixture<InputtextdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputtextdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtextdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
