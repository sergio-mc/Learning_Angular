import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgIfComponent } from './directivas-ng-if.component';

describe('DirectivasNgIfComponent', () => {
  let component: DirectivasNgIfComponent;
  let fixture: ComponentFixture<DirectivasNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
