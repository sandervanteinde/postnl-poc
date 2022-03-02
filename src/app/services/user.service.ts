import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

const knownUsersWithPassword: Map<User, string> = new Map();
knownUsersWithPassword.set(
  { emailAddress: 'stefan.vanteinde@postnl.nl', name: "Stefan van 't Einde" },
  '7335'
);
@Injectable({ providedIn: 'root' })
export class UserService {
  attemptLogin(username: string, password: string): Observable<User | null> {
    const entries = Array.from(knownUsersWithPassword.entries());
    for (const [user, userPassword] of entries) {
      if (user.emailAddress === username && password === userPassword) {
        return of(user);
      }
    }

    return of(null);
  }
}
