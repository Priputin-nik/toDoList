import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output()
  public task: EventEmitter<string>;
  public taskKey: EventEmitter<string>
  
  public control: FormControl;
  constructor() { 
    this.control = new FormControl('', Validators.required);
    this.task = new EventEmitter();
    this.taskKey = new EventEmitter();
  }
 
  ngOnInit(): void {
    
  }
  
  submit() {
    if (!this.control.value.trim()) {
      return
    }
    this.task.emit(this.control.value);
    
    this.control.setValue('');
  }
}