import { Component, OnInit } from '@angular/core';

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

  changeValue(event) {
    this.data = {
      ...this.data,
      [event.target.id]: event.target.value
    }
  }

  sendMail() {
    console.log('I will send data', this.data);
  }
}
