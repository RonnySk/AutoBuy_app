export {};

declare global {
  type UserSession = {
    email: string;
    id: number | string;
    image: string;
    name: string;
  };

  type SearchFormValues = {
    title?: string;
    price?: number;
    brand?: string;
    year?: number;
    model?: string;
  };

  type NewVehicleFormValues = {
    title: string;
    model: string;
    price: number;
    brand: string;
    year: number;
    description: string;
  };

  type Creator = {
    _id: number | string;
    email: string;
    username: string;
  };

  type Advertisement = Creator & {
    _id: number | string;
    model: string;
    title: string;
    price: number;
    brand: string;
    year: number;
    __v: number;
    description: string;
  };
}
