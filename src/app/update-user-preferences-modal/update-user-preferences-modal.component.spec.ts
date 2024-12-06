import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPreferencesModalComponent } from './update-user-preferences-modal.component';

describe('UpdateUserPreferencesModalComponent', () => {
  let component: UpdateUserPreferencesModalComponent;
  let fixture: ComponentFixture<UpdateUserPreferencesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserPreferencesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserPreferencesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
