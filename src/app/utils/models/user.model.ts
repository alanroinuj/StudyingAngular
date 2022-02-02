export interface IUser{
  id?: number;
  name: string;
  email: string;
  password: string;
  passConfirm: string;
  active: boolean;
  dateAtCreate?: any;
}
