import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectedTractorsComponent } from './app-selected-tractors.component';

describe('AppSelectedTractorsComponent', () => {
  let component: AppSelectedTractorsComponent;
  let fixture: ComponentFixture<AppSelectedTractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSelectedTractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectedTractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
