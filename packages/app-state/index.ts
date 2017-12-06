import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

export const myForm = new FormGroup({
  username: new FormControl('', Validators.required)
});

export function errorAggregator(controls: { [key: string]: AbstractControl }) {
  const errors = {};
  Object.keys(controls).forEach(field => {
    errors[field] = controls[field].errors;
  })
  return errors;
}
