import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import { lazy, Suspense } from "react";

const SignInPage = lazy(() => import("./pages/Authentication/SignInPage"));
const SignUpPage = lazy(() => import("./pages/Authentication/SignUpPage"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const ProfileAddPostPage = lazy(() =>
    import("./pages/ProfilePage/addPost/ProfileAddPostPage")
);
const ProfileDashboardPage = lazy(() =>
    import("./pages/ProfilePage/dashboard/ProfileDashboardPage")
);
const ProfilePostPage = lazy(() =>
    import("./pages/ProfilePage/post/ProfilePostPage")
);
const ProfileUserPage = lazy(() =>
    import("./pages/ProfilePage/user/ProfileUserPage")
);
const NotFoundPage = lazy(() => import("./pages/Not-found/NotFoundPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetail/PostDetailPage"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<></>}>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<HomePage />} />
                        <Route path="/contact" element={<HomePage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route
                            path="/post/:postId"
                            element={<PostDetailPage />}
                        />
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
            </Suspense>
        </div>
    );
}

export default App;
