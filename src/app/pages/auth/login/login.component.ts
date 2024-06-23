import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnakeService} from "../../../services/mat-snake-service";
import {UserService} from "../../../services/api/user-service";
import {ILoginUser, IUser} from "../../../models/IUser";
import {Router} from "@angular/router";

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
    this.userService.userUpdate?.subscribe((user: IUser) => {
      if (user) {
        this.router.navigateByUrl("/")
      }
    })
  }

  protected tryLogin(event: SubmitEvent): void {
    this.userService.login(this.buildLoginDto())
  }

  protected buildLoginDto(): ILoginUser {
    return {
      email: this.loginForm.controls.login.value
    }
  }
}
