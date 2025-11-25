import { AlbumImage, AlbumName, ArtistName, Card, CardContent, Category, ImageContainer, MetaInfo, Price } from './AlbumCard.styles';
import { Entry } from '@/types/album';

interface AlbumCardProps {
  album: Entry;
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  const imageSrc = album?.['im:image']?.[album?.['im:image'].length - 1].label;
  return (
    <Card href={album.link?.attributes.href} target="_blank" rel="noopener noreferrer">
      <ImageContainer>
        <AlbumImage src={imageSrc} alt={album.title?.label} loading="lazy" />
      </ImageContainer>
      <CardContent>
        <AlbumName>{album.title?.label}</AlbumName>
        <ArtistName>{album['im:artist']?.label}</ArtistName>
        <MetaInfo>
          <Price>{album['im:price']?.label}</Price>
          <Category>{album.category?.attributes.label}</Category>
        </MetaInfo>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
