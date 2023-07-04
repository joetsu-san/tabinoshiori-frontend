/* eslint-disable */
export type CreateUserDto = {
  username: string;
  birthday: string;
  genderId: number;
};

export type CreateOrLoginDto = {
  username: string;
};

export type User = {
  id: string;
  username: string;
  birthday: string;
  genderId: number;
  createdAt: string;
  isDeleted: boolean;
};

export type UpdateUserDto = {
  name: string;
  birthday: string;
  genderId: number;
};

export type CreatePrivateSpotDto = {
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type CreateTravelPlanDto = {
  title: string;
  description: string;
  visitedAt: string;
  travelPlanSpots: CreatePrivateSpotDto[];
};

export type Image = {
  id: string;
  src: string;
};

export type TravelPlanOverview = {
  id: string;
  title: string;
  authorId: string;
  description: string;
  visitedAt: string;
  officialSpotImages: Image[];
};

export type OfficialSpotStatus = {
  id: number;
  title: string;
};

export type TravelPlanSpot = {
  travelPlanSpotId: string;
  tourismSpotId: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  ruby: string;
  officialSpotStatus: OfficialSpotStatus;
  comment: string;
  sortIndex: number;
  minuteSincePrevious: number;
};

export type TravelPlanDetail = {
  id: string;
  title: string;
  authorId: string;
  description: string;
  visitedAt: string;
  officialSpotImages: Image[];
  travelPlanSpots: TravelPlanSpot[];
};

export type UpdateTravelPlanDto = {
  title: string;
  description: string;
  visitedAt: string;
};

export type CreateTravelPlanSpotDto = {
  tourismSpotId: string;
  comment: string;
  sortIndex: number;
  minuteSincePrevious: number;
};

export type UpdateTravelPlanSpotDto = {
  id: string;
  tourismSpotId: string;
  comment: string;
  sortIndex: number;
  minuteSincePrevious: number;
};

export type PrivateSpot = {
  id: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type UpdatePrivateSpotDto = {
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type CreateModelCourseBookmarkDto = {
  modelCourseId: string;
  sortIndex: number;
};

export type ModelCourseOverview = {
  id: string;
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseImages: Image[];
};

export type ModelCourseBookmark = {
  modelCourse: ModelCourseOverview;
  sortIndex: number;
};

export type UpdateModelCourseBookmarkDto = {
  modelCourseId: string;
  sortIndex: number;
};

export type DeleteModelCourseBookmarkDto = {
  modelCourseId: string;
};

export type CreateOfficialSpotDto = {
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatusId: number;
  officialSpotImages: string[];
};

export type OfficialSpot = {
  id: string;
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatus: OfficialSpotStatus;
  officialSpotImages: Image[];
};

export type UpdateOfficialSpotDto = {
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatusId: number;
};

export type CreateModelCourseSpotDto = {
  officialSpotId: string;
  comment: string;
  sortIndex: number;
  stayMinute: number;
  minuteSincePrevious: number;
};

export type CreateModelCourseDto = {
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseImages: string[];
  modelCourseSpot: CreateModelCourseSpotDto[];
};

export type ModelCourseSpot = {
  modelCourseSpotId: string;
  officialSpotId: string;
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatus: OfficialSpotStatus;
  officialSpotImages: Image[];
  comment: string;
  sortIndex: number;
  stayMinute: number;
  minuteSincePrevious: number;
};

export type ModelCourseDetail = {
  id: string;
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseImages: Image[];
  modelCourseSpots: ModelCourseSpot[];
};

export type UpdateModelCourseDto = {
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseImages: string[];
};

export type UpdateModelCourseSpotDto = {
  officialSpotId: string;
  comment: string;
  sortIndex: number;
  stayMinute: number;
  minuteSincePrevious: number;
};

export type CreateAdministratorDto = {
  username: string;
  email: string;
  password: string;
};

export type Administrator = {
  id: string;
  username: string;
  email: string;
};

export type UpdateAdministratorDto = {
  username: string;
  email: string;
  password: string;
};

export type LoginAdministratorDto = {
  email: string;
  password: string;
};

export type AdministratorSession = {
  sessionId: string;
};

export type LogoutAdministratorDto = {
  administratorId: string;
};

export type CreateOfficialSpotBookmarkDto = {
  tourismSpotId: string;
  sortIndex: number;
};

export type OfficialSpotBookmark = {
  officialSpotDetail: OfficialSpot;
  sortIndex: number;
};

export type UpdateOfficialSpotBookmarkDto = {
  tourismSpotId: string;
  sortIndex: number;
};

export type DeleteOfficialSpotBookmarkDto = {
  tourismSpotId: string;
};
