export interface ResponseLogin {
  data?: {
    type: string;
    attributes: {
      token: string;
    };
  };
  errors?: LoginError[];
}

export interface LoginError {
  status: string;
  title: string;
  detail: string;
}
