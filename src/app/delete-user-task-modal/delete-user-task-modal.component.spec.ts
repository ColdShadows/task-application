import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserTaskModalComponent } from './delete-user-task-modal.component';

describe('DeleteUserTaskModalComponent', () => {
  let component: DeleteUserTaskModalComponent;
  let fixture: ComponentFixture<DeleteUserTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserTaskModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
