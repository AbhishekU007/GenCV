import './App.css';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './components/Home';
import SignInPage from './components/SignInPage';
import Dashboard from './components/Dashboard';
import { useUser } from '@clerk/clerk-react';

// Protected Route Wrapper
function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null; // Wait for Clerk to load
  return isSignedIn ? <Outlet /> : <Navigate to="/auth/sign-in" replace />;
}

// App Layout with Navbar
function AppLayout() {
  return (
    <>
      <Outlet /> {/* Renders either Home or Dashboard */}
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/auth/sign-in" element={<SignInPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
