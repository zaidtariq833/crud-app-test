export type TypeStyles = {
  titleContainer: {
    margin: number;
    flexDirection: string;
    alignItems: string;
    gap: number;
  };
  stepContainer: {
    gap: number;
    marginBottom: number;
  };
  reactLogo: {
    height: number;
    width: number;
    bottom: number;
    left: number;
    position: string;
  };
};

export type TypeProduct = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

export type TypeLogin = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  success: boolean;
  token: string;
  user: {
    email: string;
    id: number;
  };
};
