import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import SignInPage from "./pages/Authentication/SignInPage";
import SignUpPage from "./pages/Authentication/SignUpPage";
import HomePage from "./pages/Home/HomePage";
import ProfileAddPostPage from "./pages/ProfilePage/addPost/ProfileAddPostPage";
import ProfileDashboardPage from "./pages/ProfilePage/dashboard/ProfileDashboardPage";
import ProfilePostPage from "./pages/ProfilePage/post/ProfilePostPage";
import ProfileUserPage from "./pages/ProfilePage/user/ProfileUserPage";
import NotFoundPage from "./pages/Not-found/NotFoundPage";
import PostDetailPage from "./pages/PostDetail/PostDetailPage";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<HomePage />} />
                    <Route path="/contact" element={<HomePage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/post/:postId" element={<PostDetailPage />} />
                    <Route path="/post" element={<ProfilePostPage />} />
                    <Route
                        element={<ProfileAddPostPage />}
                        path="/post/add-post"
                    />
                    <Route path="/user" element={<ProfileUserPage />} />
                    <Route
                        path="/user/:userID"
                        element={<div>Profile oder user</div>}
                    />
                    <Route
                        path="/dashboard"
                        element={<ProfileDashboardPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer />
            </AuthProvider>
        </div>
    );
}

export default App;
