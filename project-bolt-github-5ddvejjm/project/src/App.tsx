import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { CompanySetup } from './components/CompanySetup';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { AdminPanel } from './components/AdminPanel';
import { LeadsModule } from './components/CRMModules/LeadsModule';
import { ContactsModule } from './components/CRMModules/ContactsModule';
import { AnalyticsModule } from './components/CRMModules/AnalyticsModule';
import { ModuleBuilder } from './components/ModuleBuilder/ModuleBuilder';
import { SettingsPanel } from './components/Settings/SettingsPanel';

const AuthenticatedApp: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const { needsCompanySetup } = useAuth();

  if (needsCompanySetup) {
    return <CompanySetup />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'module-builder':
        return <ModuleBuilder />;
      case 'settings':
        return <SettingsPanel />;
      case 'admin':
        return <AdminPanel />;
      case 'leads':
        return <LeadsModule />;
      case 'contacts':
        return <ContactsModule />;
      case 'analytics':
        return <AnalyticsModule />;
      case 'deals':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900">Deals</h1>
              <p className="text-gray-600 mt-2">Manage your sales pipeline and deals</p>
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900">Activities</h1>
              <p className="text-gray-600 mt-2">Track your sales activities and tasks</p>
            </div>
          </div>
        );
      case 'campaigns':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
              <p className="text-gray-600 mt-2">Manage your marketing campaigns</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
              <p className="text-gray-600 mt-2">Generate and view detailed reports</p>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
};

const UnauthenticatedApp: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {isLoginMode ? (
        <LoginForm onToggleMode={() => setIsLoginMode(false)} />
      ) : (
        <RegisterForm onToggleMode={() => setIsLoginMode(true)} />
      )}
    </div>
  );
};

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;