import {IUserPreviewDto, MemberType} from "./IUser";

export interface ICourse{
  id: string;
  name: string;
  summary: string;
  ownerId: string
}

export interface ICourseCreateDto {
  name: string;
  summary: string;
  ownerId: string
}

export interface ICoursePreviewDto {
  id: string;
  name: string;
  summary: string;
  owner: IUserPreviewDto
}

export interface IUserCourseListRequest {
  userId: string
  memberType: MemberType
}
