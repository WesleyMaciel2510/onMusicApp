export interface HeaderState {
  // example of variables and its data, every new redux variable needs to be typed here.
  trackPlayer: boolean;
  title: string;
  count: number; // Integer (int)
  price: number; // Floating-point number (float)
  items: string[]; // Array of strings
  user: {
    name: string;
    age: number;
    email: string;
  };
}
// example of types

export interface RootState {
  header: HeaderState;
}
