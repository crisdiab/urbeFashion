import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCodigosComponent } from './listar-codigos.component';

describe('ListarCodigosComponent', () => {
  let component: ListarCodigosComponent;
  let fixture: ComponentFixture<ListarCodigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCodigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
