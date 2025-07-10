import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, Company, AuthState, LoginCredentials, RegisterCredentials, CompanySetupData } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  setupCompany: (companyData: CompanySetupData) => Promise<void>;
  checkDomainAccess: (domain: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_COMPANY'; payload: Company | null }
  | { type: 'SET_NEEDS_COMPANY_SETUP'; payload: boolean }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'SET_COMPANY':
      return {
        ...state,
        company: action.payload,
        needsCompanySetup: !action.payload,
      };
    case 'SET_NEEDS_COMPANY_SETUP':
      return {
        ...state,
        needsCompanySetup: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        company: null,
        isAuthenticated: false,
        isLoading: false,
        needsCompanySetup: false,
      };
    default:
      return state;
  }
};

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
    companyId: '1',
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    createdAt: new Date(),
    companyId: '1',
  },
  {
    id: '3',
    email: 'moderator@example.com',
    name: 'Moderator User',
    role: 'moderator',
    createdAt: new Date(),
    companyId: '1',
  },
];

// Mock companies
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Example Corp',
    mobileNumber: '+1234567890',
    accessUrl: 'example.com',
    domain: 'example.com',
    createdAt: new Date(),
    ownerId: '1',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    company: null,
    isAuthenticated: false,
    isLoading: true,
    needsCompanySetup: false,
  });

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    const storedCompany = localStorage.getItem('company');
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({ type: 'SET_USER', payload: user });
        
        if (storedCompany) {
          const company = JSON.parse(storedCompany);
          dispatch({ type: 'SET_COMPANY', payload: company });
        } else {
          dispatch({ type: 'SET_NEEDS_COMPANY_SETUP', payload: true });
        }
      } catch (error) {
        localStorage.removeItem('user');
        localStorage.removeItem('company');
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (user && credentials.password === 'password') {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
      
      // Check if user has a company
      const company = mockCompanies.find(c => c.id === user.companyId);
      if (company) {
        localStorage.setItem('company', JSON.stringify(company));
        dispatch({ type: 'SET_COMPANY', payload: company });
      } else {
        dispatch({ type: 'SET_NEEDS_COMPANY_SETUP', payload: true });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Invalid credentials');
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (credentials.password !== credentials.confirmPassword) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Passwords do not match');
    }

    if (!credentials.acceptTerms) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('You must accept the terms and conditions');
    }
    
    const existingUser = mockUsers.find(u => u.email === credentials.email);
    if (existingUser) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('User already exists');
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      role: 'user',
      createdAt: new Date(),
    };
    
    mockUsers.push(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch({ type: 'SET_USER', payload: newUser });
    dispatch({ type: 'SET_NEEDS_COMPANY_SETUP', payload: true });
  };

  const setupCompany = async (companyData: CompanySetupData): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!state.user) {
      throw new Error('User not authenticated');
    }

    const domain = companyData.accessUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    
    const newCompany: Company = {
      id: Date.now().toString(),
      name: companyData.name,
      mobileNumber: companyData.mobileNumber,
      accessUrl: companyData.accessUrl,
      domain,
      createdAt: new Date(),
      ownerId: state.user.id,
    };
    
    mockCompanies.push(newCompany);
    
    // Update user with company ID
    const updatedUser = { ...state.user, companyId: newCompany.id };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('company', JSON.stringify(newCompany));
    
    dispatch({ type: 'SET_USER', payload: updatedUser });
    dispatch({ type: 'SET_COMPANY', payload: newCompany });
  };

  const checkDomainAccess = async (domain: string): Promise<boolean> => {
    // Extract domain from email
    const emailDomain = domain.split('@')[1];
    const company = mockCompanies.find(c => c.domain === emailDomain);
    return !!company;
  };

  const logout = (): void => {
    localStorage.removeItem('user');
    localStorage.removeItem('company');
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (updates: Partial<User>): void => {
    if (state.user) {
      const updatedUser = { ...state.user, ...updates };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch({ type: 'SET_USER', payload: updatedUser });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateProfile,
        setupCompany,
        checkDomainAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};