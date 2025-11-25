import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #0a0a0a, #000000);
  }
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (prefers-color-scheme: dark) {
    background: rgba(10, 10, 10, 0.95);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 24px;

  @media (min-width: 768px) {
    padding: 32px 48px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (prefers-color-scheme: dark) {
    color: #aaa;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-color-scheme: dark) {
    border-color: #333;
    border-top-color: #60a5fa;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 16px 24px;
  border-radius: 12px;
  text-align: center;
  margin: 48px auto;
  max-width: 600px;

  @media (prefers-color-scheme: dark) {
    background: #2a1a1a;
    color: #ff6b6b;
  }
`;
