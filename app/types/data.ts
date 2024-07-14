export interface DataType {
    name?: string;
    url?: string;
    address?: string;
    time?: string;
    title?: string;
    value?: number;
    eth?: string;
    category?: string[];
    description?: string;
    type?: "GET" | "POST" | "";
    piece_cid: string,
    piece_size: string,
    payload_cid:  string,
    start_apoch: string,
    end_apoch: string,
   location_ref:  string,
   car_size: string,
  }
  