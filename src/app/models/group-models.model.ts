import { BaseModel } from './base.model';
export class GroupModels<T extends BaseModel> {
  count: number;
  next: string;
  previous?: any;
  results: T[];
}