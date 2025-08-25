export default interface User {
  userId: number;
  loginId: string;
  userName: string;
  email: string;
  phoneNumber?: string;
  birthDate: string;
  age: number;
  founderStatus: string;
  desiredIndustry: string;
  emailVerified: boolean;
  location: string;
}
