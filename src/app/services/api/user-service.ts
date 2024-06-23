import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ICourseUserPreviewDto, IUser, MemberType, UserRole} from "../../models/IUser";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser = {
    id: "17255fe7-c3dc-4b89-aa57-f724c79e3462",
    firstName: "JJerome",
    lastName: "PNU",
    email: "email@pnu.edu.ua",
    role: UserRole.TEACHER
  }
  private userCourse: ICourseUserPreviewDto = {
    id: "17255fe7-c3dc-4b89-aa57-f724c79e3462",
    firstName: "JJerome",
    lastName: "PNU",
    email: "member@pnu.edu.ua",
    memberType: MemberType.MEMBER
  }
  private pathPrefix: string = "/auth";

  constructor(
    private api: ApiService
  ) {
    if (UserService.getAuthToken() == null) {
      this.login("user@mail.com").subscribe((response) => {
        UserService.setAuthToken(response.token)
      }, error => {
        console.log(error)
      })
    } else {
      this.whoami().subscribe((response) => {
        console.log(response)
      })
    }
  }

  private login(email: string): Observable<{ token: string }> {
    return this.api.post<{ token: string }>(`${this.pathPrefix}/login`, {body: {email: email}});
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
    window.localStorage.removeItem("auth_token")
  }

  public static setAuthToken(jwtToken: string): void {
    window.localStorage.setItem("auth_token", jwtToken)
  }
}
