import { LoginPage as ContainerPageLoginPage } from "../src/containers/loginPage"
import { withRedirectPublickPage } from "../src/middleware/redirectPublick";

const LoginPage = () => {
    return (
        <ContainerPageLoginPage />
    )
}

export const getServerSideProps = withRedirectPublickPage();

export default LoginPage;
