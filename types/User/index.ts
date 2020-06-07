export default interface User {
  email: string;
  password: string;
  isAdmin?: boolean;

  validEmail?: () => boolean;
  validPassword?: (password: string) => boolean;
}