export interface IUser{
  id?: number;
  name: string;
  email: string;
  password: string;
  active: boolean;
  dataAtCreate?: string;
}
