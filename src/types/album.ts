export interface Labelled {
  label: string;
}

export interface Link {
  attributes: {
    rel?: string;
    type?: string;
    href: string;
  };
}

export interface EntryImage extends Labelled {
  attributes?: {
    height?: string;
  };
}

export interface EntryPrice extends Labelled {
  attributes?: {
    amount?: string;
    currency?: string;
  };
}

export interface EntryContentType {
  'im:contentType'?: {
    attributes?: {
      term?: string;
      label?: string;
    };
  };
  attributes?: {
    term?: string;
    label?: string;
  };
}

export interface EntryId extends Labelled {
  attributes?: {
    'im:id': string;
  };
}

export interface EntryArtist extends Labelled {
  attributes?: {
    href: string;
  };
}

export interface EntryCategory {
  attributes: {
    'im:id'?: string | number;
    term?: string;
    scheme?: string;
    label?: string;
  };
}

export interface EntryReleaseDate extends Labelled {
  attributes?: {
    label: string;
  };
}

export interface Entry {
  'im:name'?: Labelled;
  'im:image'?: EntryImage[];
  'im:itemCount'?: Labelled;
  'im:price'?: EntryPrice;
  'im:contentType'?: EntryContentType;
  rights?: Labelled;
  title?: Labelled;
  link?: Link;
  id?: EntryId;
  'im:artist'?: EntryArtist;
  category?: EntryCategory;
  'im:releaseDate'?: EntryReleaseDate;
}

export interface Feed {
  author?: {
    name?: Labelled;
    uri?: Labelled;
  };
  entry: Entry[];
  updated?: Labelled;
  rights?: Labelled;
  title?: Labelled;
  icon?: Labelled;
  link?: Link[];
  id?: Labelled;
}

export interface AlbumsJson {
  feed: Feed;
}
