import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  scroll$ = this.scrollSubject.asObservable();

  scrollTo(targetId: string): void {
    this.scrollSubject.next(targetId);
  }
}

