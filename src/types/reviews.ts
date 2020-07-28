
export interface reviewType  {
  id: number;
  user: {
    avatar: string;
    id: number;
    super: boolean;
    name: string;
  };
  rating: number;
  date: string;
  text: string;
};

