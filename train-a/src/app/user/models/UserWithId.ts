import User from './User.model';

export default interface UserWithId extends User {
  id: string;
}
