import styled from "styled-components";
import theme from "../../styles/theme";
import {
  h1Bold,
  h2Bold,
  h3Bold,
  h4Bold,
  h4Medium,
  h5Bold,
  h5Medium,
  h6Bold,
  h6Medium,
  h7Bold,
  h7Medium,
  h7Regular,
  h8Bold,
  h8Medium,
  h9Bold,
  h9Medium,
  h9Regular,
  h9Light,
  h10Bold,
  h10Medium,
  h10Regular,
  h11Bold,
  h11Medium,
  h11Regular,
  h12Bold,
  h12Regular,
  h13Bold,
} from "../../styles/common";

// $color prop 미제공 시 theme.TEXT_COLOR.basic 으로 fallback
const defaultColor = theme.TEXT_COLOR.basic;

const H1Bold = styled.p`
  ${h1Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H2Bold = styled.p`
  ${h2Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H3Bold = styled.p`
  ${h3Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H4Bold = styled.p`
  ${h4Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H4Medium = styled.p`
  ${h4Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H5Bold = styled.p`
  ${h5Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H5Medium = styled.p`
  ${h5Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H6Bold = styled.p`
  ${h6Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H6Medium = styled.p`
  ${h6Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H7Bold = styled.p`
  ${h7Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H7Medium = styled.p`
  ${h7Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H7Regular = styled.p`
  ${h7Regular}
  color: ${({ $color }) => $color || defaultColor};
`;

const H8Bold = styled.p`
  ${h8Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H8Medium = styled.p`
  ${h8Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H9Bold = styled.p`
  ${h9Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H9Medium = styled.p`
  ${h9Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H9Regular = styled.p`
  ${h9Regular}
  color: ${({ $color }) => $color || defaultColor};
`;

const H9Light = styled.p`
  ${h9Light}
  color: ${({ $color }) => $color || defaultColor};
`;

const H10Bold = styled.p`
  ${h10Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H10Medium = styled.p`
  ${h10Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H10Regular = styled.p`
  ${h10Regular}
  color: ${({ $color }) => $color || defaultColor};
`;

const H11Bold = styled.p`
  ${h11Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H11Medium = styled.p`
  ${h11Medium}
  color: ${({ $color }) => $color || defaultColor};
`;

const H11Regular = styled.p`
  ${h11Regular}
  color: ${({ $color }) => $color || defaultColor};
`;

const H12Bold = styled.p`
  ${h12Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const H12Regular = styled.p`
  ${h12Regular}
  color: ${({ $color }) => $color || defaultColor};
`;

const H13Bold = styled.p`
  ${h13Bold}
  color: ${({ $color }) => $color || defaultColor};
`;

const T = {
  H1Bold,
  H2Bold,
  H3Bold,
  H4Bold,
  H4Medium,
  H5Bold,
  H5Medium,
  H6Bold,
  H6Medium,
  H7Bold,
  H7Medium,
  H7Regular,
  H8Bold,
  H8Medium,
  H9Bold,
  H9Medium,
  H9Regular,
  H9Light,
  H10Bold,
  H10Medium,
  H10Regular,
  H11Bold,
  H11Medium,
  H11Regular,
  H12Bold,
  H12Regular,
  H13Bold,
};

export default T;
