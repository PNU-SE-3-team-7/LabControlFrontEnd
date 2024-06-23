import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ICourseUserPreviewDto, ILoginUser, IUser, MemberType, UserRole} from "../../models/IUser";
import {MatSnakeService} from "../mat-snake-service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pathPrefix: string = "/auth";
  private user: IUser = {
    id: "unknown",
    firstName: "unknown",
    lastName: "unknown",
    email: "unknown",
    role: UserRole.TEACHER
  }
  private userCourse: ICourseUserPreviewDto = {
    id: "unknown",
    firstName: "unknown",
    lastName: "unknown",
    email: "unknown",
    memberType: MemberType.MEMBER
  }

  private observer?: any

  public userUpdate?: Observable<IUser> = new Observable<IUser>((observer) => {
    this.observer = observer
  });

  constructor(
    private api: ApiService,
    private snake: MatSnakeService,
    private router: Router,
  ) {
    this.tryGetUser()
  }

  private tryGetUser(): void {
    this.whoami().subscribe((response) => {
      this.user = response
      this.observer.next(this.user)
    }, error => {
      UserService.removeAuthToken()
      this.router.navigate(['/login'])
      this.snake.error(error)
    })
  }

  /*  private tryLogin(): void{
      this.login({email: "user@mail.com"}).subscribe((response) => {
        UserService.setAuthToken(response.token)
        this.whoami().subscribe((response) => {
          this.user = response
          this.observer.next(this.user)
        }, error => {
          UserService.removeAuthToken()
          this.snake.error(error)
        });
      }, error => {
        UserService.removeAuthToken()
        this.snake.error(error)
      })
    }*/

  /*  private checkLogin(): void {
      this.whoami().subscribe((response) => {
        this.user = response
      }, error => {
        UserService.removeAuthToken()
        this.login("user@mail.com").subscribe((response) => {
          UserService.setAuthToken(response.token)
          this.whoami().subscribe((response) => {
            console.log("dfdf")
            this.user = response
          }, error => {
            UserService.removeAuthToken()
            this.snake.error(error)
          });
        }, error => {
          UserService.removeAuthToken()
          this.snake.error(error)
        })
      })
    }*/

  public login(user: ILoginUser): void {
    this.api.post<{ token: string }>(`${this.pathPrefix}/login`, {body: user})
      .subscribe(response => {
        UserService.setAuthToken(response.token)

        this.tryGetUser()
      }, error => {
        UserService.removeAuthToken()
        this.snake.error(error)
      });
  }

  public getUser(): IUser {
    return this.user
  }

  public getCourseMember(courseId: string): ICourseUserPreviewDto {
    return this.userCourse;
  }

  public whoami(): Observable<IUser> {
    return this.api.get(`${this.pathPrefix}/whoami`)
  }

  public static getUserPreviewDtoPlaceholder(): ICourseUserPreviewDto {
    return {
      id: "anonymous",
      firstName: "anonymous",
      lastName: "anonymous",
      email: "anonymous",
      memberType: MemberType.MEMBER
    }
  }

  public static getUserPlaceholder(): IUser {
    return {
      id: "anonymous",
      firstName: "anonymous",
      lastName: "anonymous",
      email: "anonymous",
      role: UserRole.TEACHER
    }
  }

  public static getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token")
  }

  public static removeAuthToken(): void {
    // window.location.reload()
    window.localStorage.removeItem("auth_token")
  }

  public static setAuthToken(jwtToken: string): void {
    window.localStorage.setItem("auth_token", jwtToken)
  }
}
