import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnakeService} from "../../../services/mat-snake-service";
import {UserService} from "../../../services/api/user-service";
import {ILoginUser} from "../../../models/IUser";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

interface LoginFormType {
  login: FormControl<string>
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup<LoginFormType> = new FormGroup<LoginFormType>(<LoginFormType>{
    login: new FormControl("", Validators.required),
  });

  private userSubscription: Subscription | null = null;

  constructor(
    private snake: MatSnakeService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.loginForm = fb.group<LoginFormType>(<LoginFormType>{
      login: new FormControl("", Validators.required),
    })
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      if (user) {
        this.router.navigateByUrl("/")
      }
      console.log('User updated in HeaderComponent:', user);
    });
  }

  protected tryLogin(event: SubmitEvent): void {
    this.userService.login(this.buildLoginDto())
  }

  protected buildLoginDto(): ILoginUser {
    return {
      email: this.loginForm.controls.login.value
    }
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
