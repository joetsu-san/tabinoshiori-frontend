/* eslint-disable */
export type CreateUserDto = {
  name: string;
  birthday: string;
  genderId: number;
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
  name?: string | undefined;
  birthday?: string | undefined;
  genderId?: number | undefined;
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
  travelPlanSpot: CreatePrivateSpotDto[];
};

export type TravelPlanOverview = {
  id: string;
  title: string;
  authorId: string;
  description: string;
  visitedAt: string;
};

export type OfficialSpotStatus = {
  id: number;
  title: string;
};

export type Image = {
  id: string;
  src: string;
};

export type TravelPlanSpotInfo = {
  id: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  ruby: string;
  officialSpotStatus: OfficialSpotStatus;
  officialSpotImages: Image[];
};

export type TravelPlanSpot = {
  travelPlanSpotInfo: TravelPlanSpotInfo;
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
  travelPlanSpots: TravelPlanSpot[];
};

export type UpdateTravelPlanDto = {
  title: string;
  description: string;
  visitedAt: string;
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
  title?: string | undefined;
  description?: string | undefined;
  address?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
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
};

export type ModelCourseBookmark = {
  modelCourse: ModelCourseOverview;
  sortIndex: number;
};

export type UpdateModelCourseBookmarkDto = {
  modelCourseId?: string | undefined;
  sortIndex?: number | undefined;
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

export type OfficialSpotOverview = {
  id: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  ruby: string;
  officialSpotStatus: OfficialSpotStatus;
};

export type OfficialSpotDetail = {
  id: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  ruby: string;
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
  modelCourseId: string;
  sortIndex: number;
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
  officialSpotInfo: OfficialSpotDetail;
  sortIndex: number;
  minuteSincePrevious: number;
};

export type ModelCourseDetail = {
  id: string;
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseSpots: ModelCourseSpot[];
  modelCourseImages: Image[];
};

export type UpdateModelCourseDto = {
  title: string;
  description: string;
  requiredMinute: number;
  modelCourseSpot: CreateModelCourseSpotDto[];
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
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
};

export type CreateOfficialSpotBookmarkDto = {
  tourismSpotId: string;
  sortIndex: number;
};

export type OfficialSpotBookmark = {
  officialSpotDetail: OfficialSpotDetail;
  sortIndex: number;
};

export type UpdateOfficialSpotBookmarkDto = {
  tourismSpotId?: string | undefined;
  sortIndex?: number | undefined;
};

export type DeleteOfficialSpotBookmarkDto = {
  tourismSpotId: string;
};
