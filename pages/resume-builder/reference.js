import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageReference from "../../src/containers/resume-builder/references/Reference"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeReferencePage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageReference />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeReferencePage;
