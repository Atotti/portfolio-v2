import { styled } from "@linaria/react";
import { Metadata } from "next";

import Anchor from "@/components/common/Anchor";
import H3 from "@/components/common/H3";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";

const Main = styled.main`
  max-width: 800px;
`;

const Paragraph = styled.p`
  margin: 0 0 12px 0;
`;

const title = "about";

export const metadata: Metadata = {
  title: title,
};

const Page = () => {
  return (
    <PageWrapper title={title} path="/about">
      <PageTitle>about</PageTitle>
      <Main>
        <H3>趣味・好きなもの</H3>
        <Paragraph>
          hogehogheohgeohgoeg
        </Paragraph>
      </Main>
    </PageWrapper>
  );
};

export default Page;
