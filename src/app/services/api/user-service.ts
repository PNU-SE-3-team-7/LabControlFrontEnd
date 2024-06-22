import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Observable, Observer} from "rxjs";
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

  private pathPrefix: string = "/user";

  constructor(
    private api: ApiService
  ) {
  }

  public getUser(): IUser {
    return this.user
  }

  public getCourseMember(courseId: string): ICourseUserPreviewDto {
    return this.userCourse;
  }

  public whoami(): Observable<IUser> {
    return new Observable<IUser>((observer: Observer<IUser>) => {
      setTimeout(() => {

      })
    });
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
}
