import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';

import PaintingList from './components/painting-list/PaintingList';
import PaintingCreate from './components/painting-add/AddPainting'
import PaintingDetails from './components/painting-details/PaintingDetails';
import PaintingEdit from './components/painting-edit/PaintingEdit';

import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

function App() {
return (
    <ErrorBoundary>
        <AuthProvider>
            <div id="box">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/paintings" element={<PaintingList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/paintings/:paintingId" element={<PaintingDetails />} />
                    <Route element={<AuthGuard />}>
                        <Route path="/paintings/create" element={< PaintingCreate/>} />
                        <Route path="/paintings/:paintingId/edit" element={<PaintingEdit />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
