// import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../../component/layout/AdminLayout";
// import { useAuth } from "../../context/authContext";
// import { db } from "../../firebase-app/firebase-config";

const AdminPage = () => {
    // const [isAdmin, setIsAdmin] = useState(false);
    // const { userInfo } = useAuth();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const checkUser = async () => {
    //         if (userInfo) {
    //             if (userInfo.uid) {
    //                 const userRef = doc(db, "users", userInfo.uid);
    //                 const docSnap = await getDoc(userRef);
    //                 if (docSnap.exists() && docSnap.data().isAdmin) {
    //                     setIsAdmin(true);
    //                 } else {
    //                     navigate("/sign-in");
    //                 }
    //             }
    //         } else {
    //             navigate("/sign-in");
    //         }
    //     };
    //     checkUser();
    // }, [userInfo]);
    // if (!isAdmin) return null;
    return (
        <AdminLayout>
            <Outlet></Outlet>
        </AdminLayout>
    );
};

export default AdminPage;
