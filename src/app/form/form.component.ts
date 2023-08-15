import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  cadastro: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {
    if (this.cadastro.valid) {
      console.log(this.cadastro.value);
    }
  }
}
