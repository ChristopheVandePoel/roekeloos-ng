import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostContainerComponent } from './single-post-container.component';

describe('SinglePostContainerComponent', () => {
  let component: SinglePostContainerComponent;
  let fixture: ComponentFixture<SinglePostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
