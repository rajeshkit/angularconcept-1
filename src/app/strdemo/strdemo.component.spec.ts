import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrdemoComponent } from './strdemo.component';

describe('StrdemoComponent', () => {
  let component: StrdemoComponent;
  let fixture: ComponentFixture<StrdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
