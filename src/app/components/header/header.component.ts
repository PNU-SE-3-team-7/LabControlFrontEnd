import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/api/user-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  protected user: IUser = UserService.getUserPlaceholder()

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }
}
