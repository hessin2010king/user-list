// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USER_DATA } from './user-data'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSource = new BehaviorSubject<any[]>([]);
  users$ = this.usersSource.asObservable();

  private allUsers: any[] = USER_DATA; // Use mock data

  constructor() {
    this.usersSource.next(this.allUsers); // Initialize with mock data
  }

  searchUsers(term: string): void {
    const filteredUsers = this.allUsers.filter(user =>
      user.email.toLowerCase().includes(term.toLowerCase())
    );
    this.usersSource.next(filteredUsers);
  }

  resetUsers(): void {
    this.usersSource.next(this.allUsers);
  }
}
