export interface commit {
  id: number;
  author: string;
  email: string;
  date: string;
  sha: string;
  message: string;
  avatar_url: string;
}

export interface apiResponse {
  success: boolean;
  data: commit[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
