import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryentrydeleteComponent } from './diaryentrydelete.component';

describe('DiaryentrydeleteComponent', () => {
  let component: DiaryentrydeleteComponent;
  let fixture: ComponentFixture<DiaryentrydeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryentrydeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryentrydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
