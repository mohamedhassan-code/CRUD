export class Employee{
  id: number;
  name: string;
  gender: string;
  contactPreference:string;
  phoneNumber?:number;
  email?:string;
  dateOfBirth:Date;
  department:any;
  password?:number
  confirmPassword?:number
  photoPath?:string;
  isActive: boolean;
}
