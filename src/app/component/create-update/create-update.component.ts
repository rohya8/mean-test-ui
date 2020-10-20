import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public user: User;
  errMessage = '';
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  submitForm() {
    this.errMessage = '';

    if (this.hasNumber(this.user.phoneNo)) {
      if (!this.user._id) {
        this.userService.createUser(this.user).subscribe((result: { data: User, message: string }) => {
          this.router.navigate(['/']);
        }, err => {
          console.log(err);
          this.errMessage = err.error.message;
        });
      } else {
        this.userService.updateUser(this.user).subscribe((result: { data: User, message: string }) => {
          this.router.navigate(['/']);
        }, err => {
          this.errMessage = err.error.message;
        });
      }
    } else {
      this.errMessage = 'Please check Phone number';
    }
  }

  hasNumber(myString) {
    return /^\d+$/.test(myString);
  }

}
