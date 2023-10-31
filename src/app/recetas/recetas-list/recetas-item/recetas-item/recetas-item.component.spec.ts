import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasItemComponent } from './recetas-item.component';

describe('RecetasItemComponent', () => {
  let component: RecetasItemComponent;
  let fixture: ComponentFixture<RecetasItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasItemComponent]
    });
    fixture = TestBed.createComponent(RecetasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
