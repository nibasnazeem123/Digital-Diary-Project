import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryentryviewComponent } from './diaryentryview.component';

describe('DiaryentryviewComponent', () => {
  let component: DiaryentryviewComponent;
  let fixture: ComponentFixture<DiaryentryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryentryviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryentryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
