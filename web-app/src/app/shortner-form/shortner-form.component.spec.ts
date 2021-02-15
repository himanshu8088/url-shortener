import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortnerFormComponent } from './shortner-form.component';

describe('ShortnerFormComponent', () => {
  let component: ShortnerFormComponent;
  let fixture: ComponentFixture<ShortnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortnerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
