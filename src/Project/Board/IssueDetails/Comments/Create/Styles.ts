import { mixin } from "lodash";
import styled from "styled-components";
import { Avatar } from "../../../../../shared/components";
import { font, color } from "../../../../../shared/utils/styles";

export const Create = styled.div`
  position: relative;
  margin-top: 25px;
  ${font.size(15)}
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Right = styled.div`
  padding-left: 44px;
`;

export const FakeTextarea = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  color: ${color.textLight};
  ${//@ts-ignore
  mixin.clickable}
  &:hover {
    border: 1px solid ${color.borderLight};
  }
`;
