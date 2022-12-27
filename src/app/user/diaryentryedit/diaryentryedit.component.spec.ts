import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryentryeditComponent } from './diaryentryedit.component';

describe('DiaryentryeditComponent', () => {
  let component: DiaryentryeditComponent;
  let fixture: ComponentFixture<DiaryentryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryentryeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryentryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
