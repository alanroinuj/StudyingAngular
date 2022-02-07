export interface ITicket{
  id?: number;
  description: string;
  employee: string;
  message?: string;
  priority: number;
  dateAtCreate?: any;
  status: string;
  state: string;
}
