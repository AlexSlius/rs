import { RegisterPage as ContainerPageRegisterPage } from "../src/containers/registerPage"
import { withRedirectPublickPage } from "../src/middleware/redirectPublick";

const RegisterPage = () => {
    return (
        <ContainerPageRegisterPage />
    )
}

export const getServerSideProps = withRedirectPublickPage();

export default RegisterPage;
