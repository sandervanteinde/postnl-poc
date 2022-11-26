import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SourceData } from 'src/source-data';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  attemptLogin(username: string, password: string): Observable<User | null> {
    const matchingUser = SourceData.users.find(
      (x) => x.email === username && x.password === password
    );
    if (matchingUser) {
      return of({
        emailAddress: matchingUser.email,
        name: matchingUser.displayName,
      });
    }
    return of(null);
  }
}
