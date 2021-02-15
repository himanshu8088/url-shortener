import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shortner-form',
  templateUrl: './shortner-form.component.html',
  styleUrls: ['./shortner-form.component.scss']
})
export class ShortnerFormComponent implements OnInit {

  @Input() shortenedUrl:string = 'www.azxas.com';
  @Output() shortenUrlButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShortenUrlButtonClick(){
    this.shortenUrlButtonClicked.emit();
  }
}
