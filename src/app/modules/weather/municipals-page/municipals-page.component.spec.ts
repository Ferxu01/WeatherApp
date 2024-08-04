import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalsPageComponent } from './municipals-page.component';

describe('MunicipalsPageComponent', () => {
  let component: MunicipalsPageComponent;
  let fixture: ComponentFixture<MunicipalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalsPageComponent]
    });
    fixture = TestBed.createComponent(MunicipalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
