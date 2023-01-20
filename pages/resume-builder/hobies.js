import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageHobies from "../../src/containers/resume-builder/hobbies/Hobies"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeHobiesPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageHobies />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeHobiesPage;
