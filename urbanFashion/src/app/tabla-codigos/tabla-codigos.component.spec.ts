import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCodigosComponent } from './tabla-codigos.component';

describe('TablaCodigosComponent', () => {
  let component: TablaCodigosComponent;
  let fixture: ComponentFixture<TablaCodigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCodigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
