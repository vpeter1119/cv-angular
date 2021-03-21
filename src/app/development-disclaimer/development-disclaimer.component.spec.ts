import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentDisclaimerComponent } from './development-disclaimer.component';

describe('DevelopmentDisclaimerComponent', () => {
  let component: DevelopmentDisclaimerComponent;
  let fixture: ComponentFixture<DevelopmentDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
