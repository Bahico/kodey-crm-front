import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly isAdmin = signal(false);
}
