interface CoffeeResponse {
  _id?: string;
  coffeName: string;
  quantity: number;
  clientName: string;
  size: string;
  note: string;
  price?: number;
  decaffeinated: boolean;
  toppings: [];
}

interface PostCoffee {
  coffeName: string;
  quantity: number;
  size: string;
  clientName: string;
  note: string;
  decaffeinated: boolean;
  toppings: [];
}
interface CoffeeState {
  coffees: CoffeeResponse[] | null;
  isLoading: boolean;
  coffeeById: CoffeeResponse | null | object;
  error: string | null | unknown;
  status: number | null | unknown;
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

export interface ModifyCoffeData {
  name?: string;
  size?: string;
  clientName?: string;
  quantity?: number;
  note?: string;
}

interface ModifyCoffeePayload {
  id: string;
  coffeeData: ModifyCoffeData;
}

interface coffeeNameOptions {
  name: string;
}
