import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers().subscribe((response: { data: User[], message: string }) => {
      this.userList = response.data;
    }, err => {
      console.log(err);
    });
  }

  onEditUser(user) {
    this.userService.setUser(user);
    this.router.navigate(['/createUpdate']);
  }

  onDeleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((result) => {
      if (result) {
        this.getUserList();
      }
    }, err => {
      console.log(err);
    });
  }
}
