import { OnInit, NgModule, Component, AfterViewInit, ElementRef, OnDestroy, HostListener, Input } from '@angular/core';
import { DomHandler} from '../common/common.service';
@Component({
  selector: 'my-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css'],
  providers:[DomHandler]
})
export class InputtextComponent implements OnInit, OnDestroy {
  @Input() isOptional: boolean = false;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() readonly: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() width: string = '';
  @Input() align: string;
  private initialized: boolean;
  
  constructor(private el: ElementRef, private domHandler: DomHandler) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    while (this.el.nativeElement.hasChildNodes()) {
      this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
    }
    this.initialized = false;
    }
}
