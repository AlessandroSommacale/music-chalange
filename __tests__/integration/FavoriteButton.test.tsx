import { renderWithProviders } from '@/utils/test-utils';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { useGetUserFavoritesQuery, useSetUserFavoritesMutation } from '@/store/api/firebaseApi';
import Heart from '../../public/heart.svg';

jest.mock('../../public/heart.svg', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props: any) => React.createElement('div', { ...props, 'data-testid': 'heart-icon' }),
  };
});

// Mock the Firebase API
jest.mock('@/store/api/firebaseApi', () => {
  const actual = jest.requireActual('@/store/api/firebaseApi');
  return {
    ...actual,
    useGetUserFavoritesQuery: jest.fn(),
    useSetUserFavoritesMutation: jest.fn(),
  };
});

describe('FavoriteButton', () => {
  const mockSetUserFavorites = jest.fn();
  const mockUser = {
    kind: 'identitytoolkit#VerifyPasswordResponse',
    localId: 'test-user-id',
    email: 'test@example.com',
    displayName: 'Test User',
    idToken: 'token',
    registered: false as const,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useSetUserFavoritesMutation as jest.Mock).mockReturnValue([mockSetUserFavorites, { isLoading: false }]);
    
    // Mock localStorage
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUser));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders add to favorites button when not in favorites', () => {
    (useGetUserFavoritesQuery as jest.Mock).mockReturnValue({
      data: ['other-album-id'],
      isLoading: false,
    });

    renderWithProviders(<FavoriteButton albumId="album-1" />, {
      preloadedState: {
        user: mockUser,
      },
    });

    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });

  it('renders remove from favorites button when in favorites', () => {
    (useGetUserFavoritesQuery as jest.Mock).mockReturnValue({
      data: ['album-1'],
      isLoading: false,
    });

    renderWithProviders(<FavoriteButton albumId="album-1" />, {
      preloadedState: {
        user: mockUser,
      },
    });

    expect(screen.getByText('Remove from favorites')).toBeInTheDocument();
  });

  it('calls setUserFavorites with new list when adding to favorites', async () => {
    (useGetUserFavoritesQuery as jest.Mock).mockReturnValue({
      data: ['other-album-id'],
      isLoading: false,
    });

    renderWithProviders(<FavoriteButton albumId="album-1" />, {
      preloadedState: {
        user: mockUser,
      },
    });

    const button = screen.getByRole('button'); // Assuming FavoriteButtonContainer renders a button or is clickable
    // Actually FavoriteButtonContainer is a styled component, likely a div or button.
    // Let's check the styles or just click the text.
    // The text is inside "sr-only" span, so it might be hidden. 
    // But we can click the element that contains the text.
    
    // Better to find by role if possible, but let's check styles first.
    // Assuming it's clickable.
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSetUserFavorites).toHaveBeenCalledWith({
        userId: 'test-user-id',
        favorites: ['other-album-id', 'album-1'],
      });
    });
  });

  it('calls setUserFavorites with filtered list when removing from favorites', async () => {
    (useGetUserFavoritesQuery as jest.Mock).mockReturnValue({
      data: ['album-1', 'other-album-id'],
      isLoading: false,
    });

    renderWithProviders(<FavoriteButton albumId="album-1" />, {
      preloadedState: {
        user: mockUser,
      },
    });

    const button = screen.getByRole('button'); // Assuming it's a button
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSetUserFavorites).toHaveBeenCalledWith({
        userId: 'test-user-id',
        favorites: ['other-album-id'],
      });
    });
  });

  it('does not render button if user is not logged in', () => {
    Storage.prototype.getItem = jest.fn(() => null);
    
    (useGetUserFavoritesQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    renderWithProviders(<FavoriteButton albumId="album-1" />, {
      preloadedState: {
        user: {} as any,
      },
    });

    expect(screen.queryByText('Add to favorites')).not.toBeInTheDocument();
    expect(screen.queryByText('Remove from favorites')).not.toBeInTheDocument();
  });
});
