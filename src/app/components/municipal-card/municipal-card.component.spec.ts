import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalCardComponent } from './municipal-card.component';

describe('MunicipalCardComponent', () => {
  let component: MunicipalCardComponent;
  let fixture: ComponentFixture<MunicipalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalCardComponent]
    });
    fixture = TestBed.createComponent(MunicipalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
