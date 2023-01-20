import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageCertificaties from "../../src/containers/resume-builder/certificaties/Certificaties"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeCertificatiesPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageCertificaties />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeCertificatiesPage;
