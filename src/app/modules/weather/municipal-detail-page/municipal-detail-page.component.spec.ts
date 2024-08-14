import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalDetailPageComponent } from './municipal-detail-page.component';

describe('MunicipalDetailPageComponent', () => {
  let component: MunicipalDetailPageComponent;
  let fixture: ComponentFixture<MunicipalDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipalDetailPageComponent]
    });
    fixture = TestBed.createComponent(MunicipalDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
