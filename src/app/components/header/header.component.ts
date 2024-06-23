import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../services/api/user-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public user: IUser | null = null;
  private userSubscription: Subscription | null = null;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
      console.log('User updated in HeaderComponent:', user);
    });
  }

  protected logout(): void {
    UserService.removeAuthToken()
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  protected readonly UserService = UserService;
}
