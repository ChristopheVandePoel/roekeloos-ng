import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';
import { SendMailService } from '../..//services/send-mail.service';

@Component({
  selector: 'contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({top: '50px', opacity: 0}),
        animate(500, style({top: '0', opacity: 1}))
      ]),
      transition(':leave', [
        style({top: '0', opacity: 1}),
        animate(500, style({top: '-50px', opacity: 0}))
      ])
    ])
  ]
})

export class ContactContainerComponent {
  public data = {
    name: '',
    email: '',
    message: ''
  };
  public validationError = {
    name: null,
    email: null,
    message: null
  };
  public activePane = 'greet';
  public mailPending = false;
  public mailSent = false;
  public mailError = null;
  public mailSuccess = false;

  constructor(private http: Http, private mailService: SendMailService) {}

  changeValue(event) {
    this.mailError = null;
    this.data = {
      ...this.data,
      [event.target.id]: event.target.value
    }
  }

  isActiveTab(tabName) {
    return tabName === this.activePane;
  }

  changeTabTo(tabName) {
    if (event) {
      event.preventDefault();
    };
    this.activePane = tabName;
  }

  validateNormal(entry, name) {
    let result = null;
    if(entry.length === 0 || !entry && name !== 'email') {
      result = `Please provide a ${name}`;
    }
    return result;
  }

  validateEmail(entry) {
    let result = null;
    if (entry.length === 0 || entry.indexOf('@') <= -1 || entry.indexOf('.') <= -1 ) {
      result = `Please provide a valid email`;
    }
    return result;
  }

  isValidData() {
    this.validationError.message = this.validateNormal(this.data.message, 'message');
    this.validationError.name = this.validateNormal(this.data.name, 'name');
    this.validationError.email = this.validateEmail(this.data.email);

    return (this.validationError.message === null && this.validationError.name === null && this.validationError.email === null);
  }

  sendMail() {
    this.mailError = null;
    if(!this.mailSuccess) {
      if(this.isValidData()) {
        this.mailPending = true;
        this.mailService.sendMail(this.data).subscribe(
          (comment) => {
            console.log(comment);
            this.mailPending = false;
            this.mailSuccess = true;
          },
          (err) => {
            this.mailError = err;
            this.mailPending = false;
            console.log("Something went wrong", err);
          }
        );
      } else {
        console.log('there was a problem with the data', this.validationError);
      }
    }
  }
}
