import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() iconPos: string = 'left';
  @Input() icon: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() style: any;
  @Input() styleClass: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  
  constructor() { }
  ngOnInit() {
  }
}
