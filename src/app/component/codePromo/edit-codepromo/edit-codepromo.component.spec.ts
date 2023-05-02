import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodepromoComponent } from './edit-codepromo.component';

describe('EditCodepromoComponent', () => {
  let component: EditCodepromoComponent;
  let fixture: ComponentFixture<EditCodepromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCodepromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCodepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
