import AlbumCard from './AlbumCard';
import { Container, Header, HeaderContent, Title, Subtitle, MainContent, LoadingContainer, Spinner, ErrorMessage, Grid } from './AlbumGrid.styles';
import { useGetTopAlbumsQuery } from '@/store/albumsApi';

const AlbumGrid = () => {
  const { data, isLoading, error } = useGetTopAlbumsQuery();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Top 100 Albums</Title>
          <Subtitle>Discover the most popular albums on iTunes</Subtitle>
        </HeaderContent>
      </Header>
      <MainContent>
        {isLoading && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
        {error && <ErrorMessage>Error: Failed to load albums</ErrorMessage>}
        {!isLoading && !error && (
          <Grid>
            {(data?.feed?.entry || []).map((album) => (
              <AlbumCard key={album.id?.label} album={album} />
            ))}
          </Grid>
        )}
      </MainContent>
    </Container>
  );
};

export default AlbumGrid;
