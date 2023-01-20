import WrapepeAdminpage from "../../src/wrappers/adminPage/AdminPage"
import ContainerPageCourse from "../../src/containers/resume-builder/course/Course"

import { withPrivateRoute } from "../../src/middleware/privateRouter"

const ResumeCoursePage = () => {
    return (
        <WrapepeAdminpage>
            <ContainerPageCourse />
        </WrapepeAdminpage>
    )
}

export const getServerSideProps = withPrivateRoute();

export default ResumeCoursePage;
