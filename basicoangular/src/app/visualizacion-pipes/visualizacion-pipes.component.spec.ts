import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionPipesComponent } from './visualizacion-pipes.component';

describe('VisualizacionPipesComponent', () => {
  let component: VisualizacionPipesComponent;
  let fixture: ComponentFixture<VisualizacionPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
