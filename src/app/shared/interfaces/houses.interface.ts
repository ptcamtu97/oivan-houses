export type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
    : Lowercase<S>;

export type KeysToCamelCase<T> = {
  [K in keyof T as CamelCase<string & K>]: T[K];
};

export interface ResponseHouseModel {
  data: HouseModelItem[];
  meta: {
    record_count: number;
  };
}
export interface HouseModelItem {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: HouseModelInfo;
}

export interface HouseModelInfo {
  model: string;
  media: {
    title: string;
    video: string;
    banner: string;
    description: string;
  };
  house_type: string;
}

export interface HouseListInfo {
  house_number: string;
  price: number;
  block_number: string;
  land_number: string;
  house_type: string;
  model: string;
  status: string;
  id: string;
  type: string;
  house_model?: string;
}

export interface ResponseHouseList {
  data: {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: HouseListInfo;
  }[];
  meta: {
    record_count: number;
  };
}

export interface HouseFilter {
  blockNumber: string;
  landNumber: string;
  minPrice: string;
  maxPrice: string;
}
