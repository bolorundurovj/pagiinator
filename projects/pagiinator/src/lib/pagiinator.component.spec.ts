import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagiinatorComponent } from './pagiinator.component';

describe('PagiinatorComponent', () => {
  let component: PagiinatorComponent;
  let fixture: ComponentFixture<PagiinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagiinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagiinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
