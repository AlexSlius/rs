import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageSocials from "../../src/containers/resume-builder/socials/Socials"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeSocialsPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageSocials />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeSocialsPage;
