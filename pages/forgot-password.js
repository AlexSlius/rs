import { ForgotPasswordPage as ContainerPageForgotPasswordPage } from "../src/containers/forgot-password-page"
import { withRedirectPublickPage } from "../src/middleware/redirectPublick";

const ForgotPasswordPage = () => {
    return (
        <ContainerPageForgotPasswordPage />
    )
}

export const getServerSideProps = withRedirectPublickPage();

export default ForgotPasswordPage;
