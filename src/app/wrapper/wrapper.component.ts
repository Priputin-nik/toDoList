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
  }
    
  ngOnDestroy(): void {
  }

  addTask(task: string): void {
    this.allMessages.unshift(this.createTask(task));
    this.storageService.setAllMessage(this.allMessages);
  }

  createTask(text: string): ArrayMessage {
    return {text: text, condition: false, id: Math.floor(Math.random()*1000000)}
  }

  activateThrowId(id: number): void {
    const taskForActivation = this.allMessages.find(item => item.id === id);
    taskForActivation.condition = !taskForActivation.condition;
    this.storageService.setAllMessage(this.allMessages);
  }

  deleteTrowId(id:number): void {
    const taskForDelete = this.allMessages.findIndex(item => item.id === id);
    this.allMessages.splice(taskForDelete,1);
    this.storageService.setAllMessage(this.allMessages);
  }
}