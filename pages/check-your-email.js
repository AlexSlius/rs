import { CheckYourEmailPage as ContainerCheckYourEmailPage } from "../src/containers/check-your-email"
import { withRedirectPublickPage } from "../src/middleware/redirectPublick";

const CheckYourEmailPage = () => {
    return (
        <ContainerCheckYourEmailPage />
    )
}

export const getServerSideProps = withRedirectPublickPage();

export default CheckYourEmailPage;
