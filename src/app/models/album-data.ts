export interface AlbumTrack {
  title: string;
  audioPath: string;
}

export interface AlbumTextSegment {
  text: string;
  italic?: boolean;
}

export interface AlbumData {
  title: string;
  backgroundImage?: string;
  vinylImage?: string;
  artistImage?: string;
  secondaryImage?: string;
  theme: 'flower-boy' | 'igor';
  heroCaption: string;
  detailsEyebrow: string;
  detailsContext: string;
  detailsTitle: string;
  description: AlbumTextSegment[][];
  year?: string;
  tracks: AlbumTrack[];
}
