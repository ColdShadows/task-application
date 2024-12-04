import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserTaskModalComponent } from './create-user-task-modal.component';

describe('CreateUserTaskModalComponent', () => {
  let component: CreateUserTaskModalComponent;
  let fixture: ComponentFixture<CreateUserTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserTaskModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
