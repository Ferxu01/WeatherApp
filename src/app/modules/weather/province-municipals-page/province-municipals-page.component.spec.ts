import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceMunicipalsPageComponent } from './province-municipals-page.component';

describe('ProvinceMunicipalsPageComponent', () => {
  let component: ProvinceMunicipalsPageComponent;
  let fixture: ComponentFixture<ProvinceMunicipalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvinceMunicipalsPageComponent]
    });
    fixture = TestBed.createComponent(ProvinceMunicipalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
