import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageInterShip from "../../src/containers/resume-builder/intership/InterShip"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeInterShipPage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageInterShip />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeInterShipPage;
