import { useGetTopAlbumsQuery } from '@/store/albumsApi';

const AlbumGrid = () => {
  const { data: albums } = useGetTopAlbumsQuery();
  return <div>{(albums?.feed.entry || []).map((e) => e?.title?.label).join(', ')}</div>;
};

export default AlbumGrid;
