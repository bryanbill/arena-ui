import { mixin } from "lodash";
import styled from "styled-components";
import { Icon } from "..";
import { color, font } from "../../utils/styles";

export const ErrorPage = styled.div`
  padding: 64px;
`;

export const ErrorPageInner = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 200px 0;
  ${//@ts-ignore
  mixin.backgroundImage("./assets/bac*.jpg")}
  @media (max-height: 680px) {
    padding: 140px 0;
  }
`;

export const ErrorBox = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 480px;
  padding: 32px;
  border-radius: 3px;
  border: 1px solid ${color.borderLight};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.9);
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 32px;
  left: 32px;
  font-size: 30px;
  color: ${color.primary};
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  padding-left: 42px;
  ${font.size(29)}
`;
