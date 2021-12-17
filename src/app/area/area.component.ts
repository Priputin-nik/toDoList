import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ArrayMessage } from '../array-message';

export enum FilterCondition {
  done = 'DONE',
  unDone = 'UNDONE',
  all = 'ALL'
}
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaComponent implements OnInit {
  @Input() public messagesForRender!: Observable<ArrayMessage[]>;
  @Output() public taskIdForActivate: EventEmitter<number>;
  @Output() public taskIdForDelete: EventEmitter<number>;
  @ViewChild(MatPaginator, {static: true}) private paginator!: MatPaginator;

  public conditions = FilterCondition;
  public pageSize: number;
  public pageIndex: number;
  private _filterCondition: FilterCondition;

  constructor() {
    this.taskIdForActivate = new EventEmitter();
    this.taskIdForDelete = new EventEmitter();
    this.pageSize = 10; 
    this.pageIndex = 0;
    this._filterCondition = FilterCondition.all;
  }

  get filterCondition(): FilterCondition {
    return this._filterCondition;
  }

  ngOnInit(): void {
  }

  activateTaskFromId(id: number) {
    this.taskIdForActivate.emit(id);
  }

  deleteTaskFromId(id: number) {
    this.taskIdForDelete.emit(id);
  }

  changeCondition(condition: FilterCondition) {
    this._filterCondition = condition;
  }
  
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  
}