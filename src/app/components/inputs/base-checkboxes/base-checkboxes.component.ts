import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-base-checkboxes',
  templateUrl: './base-checkboxes.component.html',
  styleUrl: './base-checkboxes.component.scss',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseCheckboxesComponent {
  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
