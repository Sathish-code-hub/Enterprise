import { RecordModel } from './record.model';

export interface UserModel {
  userId: string;
  name: string;
  role: 'Admin' | 'General User';
  records?: RecordModel[];
}
