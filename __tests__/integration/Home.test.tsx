import { renderWithProviders } from '@/utils/test-utils';
import Home from '@/pages/index';
import { screen, waitFor } from '@testing-library/react';
import { useGetTopAlbumsQuery } from '@/store/api/albumsApi';

// Mock the API
jest.mock('@/store/api/albumsApi', () => {
  const actual = jest.requireActual('@/store/api/albumsApi');
  return {
    ...actual,
    useGetTopAlbumsQuery: jest.fn(),
  };
});

// Mock next/head
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('Home Page', () => {
  it('renders the home page with albums', async () => {
    // Mock the hook return value
    const mockData = {
      feed: {
        entry: [
          {
            'im:name': { label: 'Album 1' },
            title: { label: 'Album 1' },
            'im:image': [{ label: 'image-url' }, { label: 'image-url' }, { label: 'image-url' }],
            'im:price': { label: '$9.99', attributes: { amount: '9.99', currency: 'USD' } },
            'im:artist': { label: 'Artist 1' },
            id: { label: '1', attributes: { 'im:id': '1' } },
            category: { attributes: { label: 'Pop' } },
            'im:releaseDate': { label: '2023-01-01', attributes: { label: 'January 1, 2023' } },
            link: { attributes: { href: 'http://example.com' } },
          },
        ],
      },
    };

    (useGetTopAlbumsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isSuccess: true,
      isError: false,
      refetch: jest.fn(),
    });

    renderWithProviders(<Home />);

    // Check if the header is present
    expect(screen.getByText(/Top 100 Albums/i)).toBeInTheDocument();

    // Check if the album is rendered
    await waitFor(() => {
        expect(screen.getByText('Album 1')).toBeInTheDocument();
        expect(screen.getByText('Artist 1')).toBeInTheDocument();
    });
  });

  it('renders loading state', () => {
     (useGetTopAlbumsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isSuccess: false,
      isError: false,
      refetch: jest.fn(),
    });

    renderWithProviders(<Home />);
    
    expect(screen.queryByText('Album 1')).not.toBeInTheDocument();
  });
});
