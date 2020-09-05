import styled from 'styled-components';

export const Flex = styled.div<{ height: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
`;
