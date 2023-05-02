import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodepromoComponent } from './add-codepromo.component';

describe('AddCodepromoComponent', () => {
  let component: AddCodepromoComponent;
  let fixture: ComponentFixture<AddCodepromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCodepromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCodepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
