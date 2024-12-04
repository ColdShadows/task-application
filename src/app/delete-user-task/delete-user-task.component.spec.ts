import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserTaskComponent } from './delete-user-task.component';

describe('DeleteUserTaskComponent', () => {
  let component: DeleteUserTaskComponent;
  let fixture: ComponentFixture<DeleteUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
