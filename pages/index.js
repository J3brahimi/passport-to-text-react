import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/layout";
import { Container } from "@mui/system";
import PassportToText from "components/PassportToText";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Passport to text</title>
      </Head>
      <Layout>
        <Container>
          <PassportToText />
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
