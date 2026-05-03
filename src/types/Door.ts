export interface Door {
  _id: string;
  title: string;
  images: string[];
  description: string;
  coverImage: string;
  category?: string;
  doorType?: string;
  model: string;
}

export interface DoorData {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  category?: string;
  doorType?: string;
  model: string;
}

export interface DoorResponse {
  status: boolean;
  message: string;
  statusCode: number;
  data: Door;
}