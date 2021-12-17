import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from '../storage.service';
import { ArrayMessage } from '../array-message'
import { BehaviorSubject, Observable, share, Subject } from 'rxjs';
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit, OnDestroy {
  public allMessages: ArrayMessage[];
  public allMessages$: Observable<ArrayMessage[]>
  private allMessagesSubject: BehaviorSubject<ArrayMessage[]>

  constructor(private storageService: StorageService, private cdr: ChangeDetectorRef) { 
    this.allMessages = [];
    this.allMessagesSubject = new BehaviorSubject(this.allMessages);
    this.allMessages$ = this.allMessagesSubject.asObservable().pipe(share());
  }

  ngOnInit(): void {
    this.allMessages = this.storageService.getAllMessage();
    this.updateSubject();
  }
    
  ngOnDestroy(): void {
    this.allMessagesSubject.complete();
  }

  addTask(task: string): void {
    this.allMessages.unshift(this.createTask(task));
    this.storageService.setAllMessage(this.allMessages);
    this.updateSubject();
  }

  createTask(text: string): ArrayMessage {
    return {text: text, condition: false, id: Math.floor(Math.random()*1000000)}
  }

  activateThrowId(id: number): void {
    const taskForActivation = this.allMessages.find(item => item.id === id);
    if (!taskForActivation) {
      return;
    }
    taskForActivation.condition = !taskForActivation?.condition;
    this.storageService.setAllMessage(this.allMessages);
    this.updateSubject();
  }

  deleteTrowId(id:number): void {
    const taskForDelete = this.allMessages.findIndex(item => item.id === id);
    this.allMessages.splice(taskForDelete,1);
    this.storageService.setAllMessage(this.allMessages);
    this.updateSubject();
  }

  private updateSubject(): void {
    this.allMessagesSubject.next(this.allMessages);
  }

}