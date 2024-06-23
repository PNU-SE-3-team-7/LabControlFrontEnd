import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/api/user-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  protected user?: IUser

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.userUpdate?.subscribe((updatedUser: IUser) => {
      console.log(updatedUser);
      this.user = updatedUser;
    })
  }

  protected readonly UserService = UserService;
}
