export interface Post {
  _id: string;
  user: {
      counts: {
        followedBy: number;
      }
      username: string;
      profilePicUrl: string;
  };
  counts: {
    likes: number;
    comments: number;
  };
  postedAt: string;
  kind: string;
  shortcode: string;
  caption: string;
}
