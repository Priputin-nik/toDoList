import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from '../storage.service';
import { ArrayMessage } from '../array-message'

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [StorageService]
})
export class WrapperComponent implements OnInit, OnDestroy {
  public allMessages: any[];

  constructor(private storageService: StorageService) { 
    this.allMessages = [];
  }

  ngOnInit(): void {
    this.allMessages = this.storageService.getAllMessage();
    console.log(this.allMessages);
  }
    
  ngOnDestroy(): void {
  }

  addTask(task: string): void {
    this.allMessages.unshift(this.createTask(task));
    this.storageService.setAllMessage(this.allMessages);
  }

  createTask(text: string): ArrayMessage {
    return {text: text, condition: false}
  } 

  deleteTask(index: number): void {
    this.allMessages.splice(index, 1);
    this.storageService.setAllMessage(this.allMessages);
  }

  activateTask(index: number): void {
    this.allMessages[index].condition = !this.allMessages[index].condition;
    this.storageService.setAllMessage(this.allMessages);
  }

}