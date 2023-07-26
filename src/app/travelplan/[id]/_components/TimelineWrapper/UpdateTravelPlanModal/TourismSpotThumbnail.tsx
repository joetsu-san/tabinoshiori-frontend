import { Image } from "@mantine/core";

type Props = {
  imageSrc: string;
  imageAlt?: string;
};
export const TourismSpotThumbnail = ({ imageSrc, imageAlt }: Props) => {
  const src = imageSrc;
  const alt = imageAlt || "観光地画像";
  return <Image src={src} alt={alt} width={200} height={150} fit="cover" />;
};
