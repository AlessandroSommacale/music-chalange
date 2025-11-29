import AlbumGrid from '@/components/AlbumGrid/AlbumGrid';
import HomeHeader from '@/components/HomeHeader/HomeHeader';
import { albumsApi } from '@/store/api/albumsApi';
import { wrapper } from '@/store/store';
import { Container, MainContent } from '@/styles/home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Top 100 Albums - iTunes</title>
        <meta name="description" content="Discover the top 100 most popular albums on iTunes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <HomeHeader />
        <MainContent>
          <AlbumGrid />
        </MainContent>
      </Container>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(albumsApi.endpoints.getTopAlbums.initiate());
  await Promise.all(store.dispatch(albumsApi.util.getRunningQueriesThunk()));
  return {
    props: {},
    // revalidate: 86400,
  };
});
