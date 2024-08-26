import { Roles } from './Roles.model';

export default interface User {
  name: string;
  email: string;
  role: Roles;
}
