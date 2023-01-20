import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageContact from "../../src/containers/resume-builder/contact/Contact"

import { withPublickRoute } from "../../src/middleware/publickRouter"

const ResumeContactPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageContact />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPublickRoute();

export default ResumeContactPage;
