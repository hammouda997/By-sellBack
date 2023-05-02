import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCodepromoComponent } from './list-codepromo.component';

describe('ListCodepromoComponent', () => {
  let component: ListCodepromoComponent;
  let fixture: ComponentFixture<ListCodepromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCodepromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCodepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
