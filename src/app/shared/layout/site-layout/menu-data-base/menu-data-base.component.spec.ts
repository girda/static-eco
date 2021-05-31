import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDataBaseComponent } from './menu-data-base.component';

describe('MenuDataBaseComponent', () => {
  let component: MenuDataBaseComponent;
  let fixture: ComponentFixture<MenuDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
