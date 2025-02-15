export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface Photo {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  alt_description: string;
  user: User;
  current_user_collections: unknown[];
  links: PhotoLinks;
  urls: PhotoUrls;
}

interface User {
  id: string;
  username: string;
  name: string;
  first_name?: string | null;
  last_name?: string | null;
  portfolio_url: string | null;
  bio?: string | null;
  location?: string | null;
  instagram_username: string;
  twitter_username: string | null;
  profile_image: ProfileImage;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
}

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
