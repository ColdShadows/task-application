import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserTaskModalComponent } from './update-user-task-modal.component';

describe('UpdateUserTaskModalComponent', () => {
  let component: UpdateUserTaskModalComponent;
  let fixture: ComponentFixture<UpdateUserTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserTaskModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
