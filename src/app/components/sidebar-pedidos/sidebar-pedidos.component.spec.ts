import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPedidosComponent } from './sidebar-pedidos.component';

describe('SidebarPedidosComponent', () => {
  let component: SidebarPedidosComponent;
  let fixture: ComponentFixture<SidebarPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPedidosComponent]
    });
    fixture = TestBed.createComponent(SidebarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
