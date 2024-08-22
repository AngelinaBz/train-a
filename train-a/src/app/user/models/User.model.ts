import { Role } from './Roles.model';

export default interface User {
  name: string;
  email: string;
  role: Role;
}
