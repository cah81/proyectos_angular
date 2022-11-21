import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoClientesComponent } from './contenido-clientes.component';

describe('ContenidoClientesComponent', () => {
  let component: ContenidoClientesComponent;
  let fixture: ComponentFixture<ContenidoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
