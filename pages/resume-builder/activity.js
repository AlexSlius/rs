import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageActivity from "../../src/containers/resume-builder/activities/Activity"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeActivityPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageActivity />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeActivityPage;
