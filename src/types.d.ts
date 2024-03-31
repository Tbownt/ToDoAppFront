interface CoffeResponse {
  _id: string;
  name: string | void;
  quantity: number;
  size: string;
  type_of_milk: string;
  type_of_coffe: string;
  note: string;
}
interface CoffeState {
  coffe: CoffeResponse[] | null;
  isLoading: boolean;
  error: string | null | unknown;
}

interface AuthState {
  user: UserData | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface UserData {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
}

export interface UserInterface {
  email: string;
  password: string;
}

export interface ModifyCoffeeData {
  name?: string;
  size?: string;
  type_of_milk?: string;
  type_of_coffee?: string;
  note?: string;
}

interface ModifyCoffeePayload {
  id: string;
  coffeeData: ModifyCoffeeData;
}
