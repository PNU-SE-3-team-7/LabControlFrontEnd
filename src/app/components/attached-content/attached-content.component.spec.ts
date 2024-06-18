import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachedContentComponent } from './attached-content.component';

describe('AttachedContentComponent', () => {
  let component: AttachedContentComponent;
  let fixture: ComponentFixture<AttachedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttachedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
