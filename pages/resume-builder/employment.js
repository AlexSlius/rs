import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageEmploment from "../../src/containers/resume-builder/employment/Employment"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeEmplomentPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageEmploment />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeEmplomentPage;
