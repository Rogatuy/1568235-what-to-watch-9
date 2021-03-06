export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type UserCommentData = {
  comment: string,
  rating: number,
  token: string,
};

export type UserLoginData = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
  token: string,
};

export type ReviewSendStatus = 'initial' | 'sending' | 'error';
