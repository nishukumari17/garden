import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnaComponent } from './cna.component';

describe('CnaComponent', () => {
  let component: CnaComponent;
  let fixture: ComponentFixture<CnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnaComponent]
    });
    fixture = TestBed.createComponent(CnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
