import ManagerAuthor from "./ManagerAuthor";
import ManagerFeature from "./ManagerFeature";
import ManagerID from "./ManagerID";
import ManagerAction from "./managerPostAction/ManagerAction";
import ManagerPostInfo from "./ManagerPostInfo";
import ManagerPublic from "./ManagerPublic";
import ManagerStatus from "./ManagerStatus";

const managerPostItem = {
    Id: <ManagerID />,
    Author: <ManagerAuthor />,
    Feature: <ManagerFeature />,
    Public: <ManagerPublic />,
    Post: <ManagerPostInfo />,
    Status: <ManagerStatus />,
    Action: <ManagerAction />,
};

export default managerPostItem;
