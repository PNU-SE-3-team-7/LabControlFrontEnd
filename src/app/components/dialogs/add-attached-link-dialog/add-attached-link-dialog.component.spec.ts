import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttachedLinkDialogComponent } from './add-attached-link-dialog.component';

describe('AddAttachedLinkDialogComponent', () => {
  let component: AddAttachedLinkDialogComponent;
  let fixture: ComponentFixture<AddAttachedLinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAttachedLinkDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttachedLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
