import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardPage } from './wizard.page';

describe('WizardPage', () => {
  let component: WizardPage;
  let fixture: ComponentFixture<WizardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
