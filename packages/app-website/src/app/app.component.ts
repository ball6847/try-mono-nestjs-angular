import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { errorAggregator, myForm } from 'app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = myForm;

  constructor(private http: HttpClient) {
  }

  submit(e: Event) {
    e.preventDefault();

    if (!this.form.valid) {
      return false;
    }

    this.http.post('http://localhost:3000/', this.form.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  get errors() {
    return errorAggregator(this.form.controls);
  }
}
