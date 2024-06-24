import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-base-textarea',
  templateUrl: './base-textarea.component.html',
  styleUrl: './base-textarea.component.scss',
  standalone: true,
  imports: [MatFormFieldModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTextareaComponent {

}
