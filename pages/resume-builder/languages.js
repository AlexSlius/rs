import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageLanguages from "../../src/containers/resume-builder/languages/Languages"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeLanguagesPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageLanguages />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeLanguagesPage;
