/* eslint-disable */
export type CreateUserDto = {
  name: string
  birthday: string
  genderId: number
}

export type User = {
  id: string
  name: string
  birthday: string
  genderId: number
  createAt: string
  isDeleted: boolean
}

export type UpdateUserDto = {
  name?: string | undefined
  birthday?: string | undefined
  genderId?: number | undefined
}

export type CreatePrivateSpotDto = {
  title: string
  description: string
  address: string
  latitude: number
  longitude: number
}

export type CreateTravelPlanDto = {
  title: string
  description: string
  visitedAt: string
  travelPlanSpot: CreatePrivateSpotDto[]
}

export type TravelPlanOverview = {
  id: string
  title: string
  authorId: string
  description: string
  visitedAt: string
}

export type TravelPlanSpot = {
  id: string
  tourismSpotId: string
  travelPlanId: string
  comment: string
  sortIndex: number
  minuteToNext: number
}

export type TravelPlanDetail = {
  id: string
  title: string
  authorId: string
  description: string
  visitedAt: string
  travelPlanSpot: TravelPlanSpot[]
}

export type UpdateTravelPlanDto = {
  title: string
  description: string
  visitedAt: string
}

export type PrivateSpot = {
  id: string
  title: string
  description: string
  address: string
  latitude: number
  longitude: number
}

export type UpdatePrivateSpotDto = {
  title?: string | undefined
  description?: string | undefined
  address?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
}

export type CreateModelCourseBookmarkDto = {
  modelCourseId: string
  sortIndex: number
}

export type ModelCourseOverview = {
  id: string
  title: string
  description: string
  requiredMinute: string
}

export type ModelCourseBookmark = {
  modelCourse: ModelCourseOverview
  sortIndex: number
}

export type UpdateModelCourseBookmarkDto = {
  modelCourseId?: string | undefined
  sortIndex?: number | undefined
}

export type DeleteModelCourseBookmarkDto = {
  modelCourseId: string
}

export type CreateOfficialSpotDto = {
  title: string
  ruby: string
  description: string
  address: string
  latitude: number
  longitude: number
  officialSpotStatusId: number
}

export type OfficialSpotOverview = {
  id: string
  title: string
  ruby: string
  description: string
  address: string
  latitude: number
  longitude: number
  officialSpotStatus: 'open' | 'close'
}

export type OfficialSpotImages = {
  id: string
  src: string
}

export type OfficialSpotDetail = {
  id: string
  title: string
  ruby: string
  description: string
  address: string
  latitude: number
  longitude: number
  officialSpotStatus: 'open' | 'close'
  officialSpotImages: OfficialSpotImages[]
}

export type UpdateOfficialSpotDto = {
  title?: string | undefined
  ruby?: string | undefined
  description?: string | undefined
  address?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  officialSpotStatusId?: number | undefined
}

export type CreateModelCourseSpotDto = {
  officialSpotId: string
  modelCourseId: string
  sortIndex: string
  minuteToNext: string
}

export type CreateModelCourseDto = {
  title: string
  description: string
  requiredMinute: string
  modelCourseSpot: CreateModelCourseSpotDto[]
}

export type ModelCourseSpot = {
  officialSpotId: string
  modelCourseId: string
  sortIndex: string
  minuteToNext: string
}

export type ModelCourseDetail = {
  id: string
  title: string
  description: string
  requiredMinute: string
  modelCourseSpot: ModelCourseSpot[]
}

export type UpdateModelCourseDto = {
  title?: string | undefined
  description?: string | undefined
  requiredMinute?: string | undefined
  modelCourseSpot?: CreateModelCourseSpotDto[] | undefined
}

export type CreateAdministoratorDto = {
  username: string
  email: string
  password: string
}

export type Administorator = {
  id: string
  username: string
  email: string
}

export type UpdateAdministoratorDto = {
  username?: string | undefined
  email?: string | undefined
  password?: string | undefined
}

export type CreateOfficialSpotBookmarkDto = {
  tourismSpotId: string
  sortIndex: number
}

export type OfficialSpotBookmark = {
  officialSpot: OfficialSpotDetail
  sortIndex: number
}

export type UpdateOfficialSpotBookmarkDto = {
  tourismSpotId?: string | undefined
  sortIndex?: number | undefined
}

export type DeleteOfficialSpotBookmarkDto = {
  tourismSpotId: string
}
