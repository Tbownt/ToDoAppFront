interface CoffeeResponse {
  _id?: string;
  coffeeName: string;
  quantity: number;
  size: string;
  clientName: string;
  note: string;
  decaffeinated: boolean;
  toppings: [];
}

interface PostCoffee {
  coffeeName: string;
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
  coffeeById: CoffeeResponse | null;
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

export interface EditedCoffe {
  id: string;
  coffeeName: string;
  size: string;
  quantity: number;
  clientName: string;
  note: string;
  decaffeinated: boolean;
  toppings: never[];
}

interface coffeeNameOptions {
  name: string;
}
