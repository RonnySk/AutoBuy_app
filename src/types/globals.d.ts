export {};

declare global {
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

  interface PropsArrAdData {
    adData: Advertisement[];
  }

  interface PropsAdData {
    adData: Advertisement;
  }
}
