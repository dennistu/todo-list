import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, item: any){
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key:string): any | null{
    return JSON.parse(localStorage.getItem(key));
  }

  clearAll(){
    localStorage.clear();
  }

  deleteItem(key:string){
    localStorage.removeItem(key);
  }
}
