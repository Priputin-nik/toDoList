import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
   }

  getAllMessage(): string[] {
    return JSON.parse(localStorage.getItem('Message_store') as string) ?? [];
  }

  setAllMessage(arrayMessage: string[]):void {
    localStorage.setItem('Message_store', JSON.stringify(arrayMessage)); 
  }
}
