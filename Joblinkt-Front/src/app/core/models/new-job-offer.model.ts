export interface NewJobOffer {
    startDateTime:Date,
  endDateTime:Date,
  userId: string,
  companyId:string,
  positionName: string,
  description: string,
  dailyActivities: string[],
  requirements: string[],
  isPostedOnDislinkt:boolean
  }
  