import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import SignInPage from "./pages/authentication/SignInPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import HomePage from "./pages/Home/HomePage";
import ManagerAddPostPage from "./pages/ManagerPage/addPost/ManagerAddPostPage";
import ManagerDashboardPage from "./pages/ManagerPage/dashboard/ManagerDashboardPage";
import ManagerPostPage from "./pages/ManagerPage/post/ManagerPostPage";
import ManagerUserPage from "./pages/ManagerPage/user/ManagerUserPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import PostDetailPage from "./pages/PostDetail/PostDetailPage";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/:postId" element={<PostDetailPage />} />
                    <Route path="/manager/post" element={<ManagerPostPage />} />
                    <Route path="/manager/user" element={<ManagerUserPage />} />
                    <Route
                        path="/manager/post/add-post"
                        element={<ManagerAddPostPage />}
                    />
                    <Route
                        path="/manager/dashboard"
                        element={<ManagerDashboardPage />}
                    />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer />
            </AuthProvider>
        </div>
    );
}

export default App;
