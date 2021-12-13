import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @Input() public messagesForRender: any;
  @Output() public index: EventEmitter<number>;
  @Output() public indexActivate: EventEmitter<number>


  constructor() {
    this.index = new EventEmitter();
    this.indexActivate = new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  method(numberMessage: number): void {
    this.index.emit(numberMessage);
  }

  activateTask(numberMessage: number) {
    this.indexActivate.emit(numberMessage);
  }

}
