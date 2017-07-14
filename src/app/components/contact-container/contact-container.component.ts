import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})

export class ContactContainerComponent {
  public data = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private http: Http) {}

  changeValue(event) {
    this.data = {
      ...this.data,
      [event.target.id]: event.target.value
    }
  }

  sendComment() {
    // this works! now change it to something sensible that will work on a server.
    return this.http.post('http://localhost:9991/mail', this.data)
      .map((resp) => "Whu")
      .catch((error: any) => 'Server Error');
  }

  sendMail() {
    // console.log('I will send data', this.data, 'http://localhost:9991/mail');
    this.sendComment().subscribe(
      comment => console.log(comment),
      err => console.log(err)
    );
  }
}
