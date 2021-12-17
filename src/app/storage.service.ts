import { Injectable } from '@angular/core';
import { ArrayMessage } from './array-message';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
   }

  getAllMessage(): ArrayMessage[] {
    return JSON.parse(localStorage.getItem('Message_store') as string) ?? [];
  }

  setAllMessage(arrayMessage: ArrayMessage[]):void {
    localStorage.setItem('Message_store', JSON.stringify(arrayMessage)); 
  }
}
