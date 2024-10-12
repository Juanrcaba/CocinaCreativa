import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


     isLoading$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(){
    
  }

  get loadingValue(): Observable<boolean>{
    return this.isLoading$.asObservable()
  }
    show(){
         this.isLoading$.next(false)
    }

    hide(){
        this.isLoading$.next(true)
    }
}