import { Injectable } from '@angular/core';
import { Origin } from '../interfaces/General';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerDataSubject = new BehaviorSubject<Origin|null>(null);
  footerData$ = this.footerDataSubject.asObservable();

  setFooterInfo(data: Origin): void {
    this.footerDataSubject.next(data);
  }

  getFooterInfo(): Origin | null {
    return this.footerDataSubject.getValue();
  }
}
