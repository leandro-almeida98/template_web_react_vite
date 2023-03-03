import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { toast } from "react-toastify";

export const fetch_login = async (data: any) => {
  const { data: response } = await axios.post(
    "http://jogosapidev.sec.ba.gov.br/api/auth",
    data
  );
  return response.data;
};
