export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'moderator';
  avatar?: string;
  createdAt: Date;
  companyId?: string;
}

export interface Company {
  id: string;
  name: string;
  mobileNumber: string;
  accessUrl: string;
  domain: string;
  createdAt: Date;
  ownerId: string;
}

export interface AuthState {
  user: User | null;
  company: Company | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  needsCompanySetup: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface CompanySetupData {
  name: string;
  mobileNumber: string;
  accessUrl: string;
}