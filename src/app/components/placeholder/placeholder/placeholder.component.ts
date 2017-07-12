import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { getSyntaxformatted } from '../../../utils/syntax';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  code: String;

  constructor() {
  }

  ngOnInit() {
  }

}
