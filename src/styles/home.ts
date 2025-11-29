import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #0a0a0a, #000000);
  }
`;

export const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 48px 48px;
  }
`;
