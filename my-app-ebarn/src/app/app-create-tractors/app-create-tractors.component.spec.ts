import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateTractorsComponent } from './app-create-tractors.component';

describe('AppCreateTractorsComponent', () => {
  let component: AppCreateTractorsComponent;
  let fixture: ComponentFixture<AppCreateTractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCreateTractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreateTractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
