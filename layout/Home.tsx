import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;
const HomeLayout = ({ children }: { children: ReactNode }) => {
  console.log(children);
  return <Wrapper>{children}</Wrapper>;
};
export default HomeLayout;
