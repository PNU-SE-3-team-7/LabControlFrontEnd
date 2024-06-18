import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface IAddAttachedLinkDialogReturnDataType {
  fileUri: string
}

interface IFormType {
  fileUri: FormControl<string>;
}

@Component({
  selector: 'app-add-attached-link-dialog',
  templateUrl: './add-attached-link-dialog.component.html',
  styleUrl: './add-attached-link-dialog.component.scss'
})
export class AddAttachedLinkDialogComponent {

  public form: FormGroup<IFormType> = new FormGroup(<IFormType>{
    fileUri: new FormControl<string>(''),
  });

  constructor(
    public dialogRef: MatDialogRef<AddAttachedLinkDialogComponent, IAddAttachedLinkDialogReturnDataType>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group<IFormType>(<IFormType>{
      fileUri: new FormControl<string>(''),
    })
  }

  public close(value: boolean): void {
    this.dialogRef.close(value ? this.getReturnData() : undefined);
  }

  private getReturnData(): IAddAttachedLinkDialogReturnDataType {
    return {
      fileUri: this.form.get('fileUri')?.value || "",
    };
  }
}
