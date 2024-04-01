import { styled } from "@linaria/react";

import { photos } from "@/app/photos/_const";
import logo from "@/assets/index/logo2.svg";
import Anchor from "@/components/common/Anchor";
import CustomList from "@/components/common/CustomList";
import H2 from "@/components/common/H2";
import { SearchParams } from "@/lib/utils";
import { creations } from "../const/creation";
import LinkList from "./LinkList";

const Wrapper = styled.main`
  max-width: 1100px;
  margin: 30px 50px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TopContent = styled.div`
  flex: 1;
`;

const H1 = styled.h1`
  margin: 0;

  img {
    max-width: min(450px, 100%);
  }
`;

const ListWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.span`
  width: 24px;
  height: 1px;
  margin: 4px 16px;
  display:inline-block;
  background: #666;
`;

interface MainProps {
  searchParams: SearchParams;
}

const Main = ({ searchParams }: MainProps) => {
  return (
    <Wrapper>
      <Top>
        <TopContent>
          <H1>
            title
          </H1>
          <section>
            <H2>写真</H2>
            <CustomList>
              {photos.map(({ title, data }, index) => (
                <li key={index}>
                  {data ? (
                    <Anchor href={`/photos/${data.key}`}>{title}</Anchor>
                  ) : (
                    <del>{title}</del>
                  )}
                </li>
              ))}
            </CustomList>
          </section>
          <section style={{ marginTop: "24px" }}>
            <CustomList>
              {creations.map((creation) => (
                <li key={creation.url}>
                  <Anchor href={creation.url}>{creation.title}</Anchor>
                </li>
              ))}
            </CustomList>
          </section>
        </TopContent>
        <TopContent>
          <LinkList />
          <p>
            <Anchor href="/about">about</Anchor>
            <Divider />
            ソースコードを{" "}
            <Anchor href="https://github.com/">
              GitHub
            </Anchor>{" "}
            で公開しています
          </p>
        </TopContent>
      </Top>
    </Wrapper>
  );
};

export default Main;
