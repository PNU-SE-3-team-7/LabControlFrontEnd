export enum MemberType {
  MEMBER = "MEMBER",
  EDUCATOR = "EDUCATOR"
}

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  USER = "USER"
}

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
}

export interface ILoginUser {
  email: string
}

export interface IUserPreviewDto {
  id: string
  firstName: string
  lastName: string
  email: string
}

export interface ICourseUserPreviewDto extends IUserPreviewDto {
  memberType: MemberType
}

export interface ICourseMember {
  userId: string
  courseId: string
  memberType: MemberType
}

export interface IChangeMemberTypeRequest {
  userId: string
  memberType: MemberType
}
