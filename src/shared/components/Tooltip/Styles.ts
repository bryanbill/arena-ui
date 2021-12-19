import { mixin } from "lodash";
import styled from "styled-components";
import { zIndexValues } from "../../utils/styles";

export const StyledTooltip = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  width: ${//@ts-ignore
  (props) => props.width}px;
  border-radius: 3px;
  background: #fff;
  ${//@ts-ignore
  mixin.hardwareAccelerate}
  ${//@ts-ignore
  mixin.boxShadowDropdown}
`;
