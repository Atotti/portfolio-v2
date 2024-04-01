import { styled } from "@linaria/react";

const Heading = styled.h1`
  color: #666666;
  font-size: 30px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const H1 = (props: React.ComponentPropsWithoutRef<"h1">) => {
  return <Heading {...props} />;
};

export default H1;
