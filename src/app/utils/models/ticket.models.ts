export interface ITicket{
  id?: number;
  description: string;
  employee: string;
  message?: string;
  priority: string;
  dateAtCreate?: any;
  status: string;
  state: string;
}
