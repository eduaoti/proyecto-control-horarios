import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGanttComponent } from './grafica-gantt.component';

describe('GraficaGanttComponent', () => {
  let component: GraficaGanttComponent;
  let fixture: ComponentFixture<GraficaGanttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaGanttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficaGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
