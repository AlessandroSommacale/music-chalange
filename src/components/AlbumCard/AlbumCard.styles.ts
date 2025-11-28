import styled from 'styled-components';

export const Card = styled.a`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (prefers-color-scheme: dark) {
    background: #1a1a1a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const AlbumImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AlbumName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const ArtistName = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;

  @media (prefers-color-scheme: dark) {
    border-top-color: #333;
  }
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #2563eb;

  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
  }
`;

export const Category = styled.span`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #999;
  }
`;
