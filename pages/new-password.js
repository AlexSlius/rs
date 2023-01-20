import { NewPasswordPage as ContainerPageNewPassword } from "../src/containers/new-password"
import { withRedirectPublickPage } from "../src/middleware/redirectPublick";

const NewPasswordPage = () => {
    return (
        <ContainerPageNewPassword />
    )
}

export const getServerSideProps = withRedirectPublickPage();

export default NewPasswordPage;
