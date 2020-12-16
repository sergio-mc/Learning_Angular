import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgForComponent } from './directivas-ng-for.component';

describe('DirectivasNgForComponent', () => {
  let component: DirectivasNgForComponent;
  let fixture: ComponentFixture<DirectivasNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
