import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageEducation from "../../src/containers/resume-builder/education/Education"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeEducationPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageEducation />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeEducationPage;
