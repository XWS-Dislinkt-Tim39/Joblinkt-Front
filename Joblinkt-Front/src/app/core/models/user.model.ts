import { Role } from "./level.model";

export interface User {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
   
    address: string;
    city: string;
    country: string;
    phoneNumber: string;
  
    role: Role;
    isApproved:boolean
}
