import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { toast } from "react-toastify";

export const fetch_login = async (data: { usuario: string; senha: string }) => {
  const { data: response } = await axios.post(
    "http://jogosapidev.sec.ba.gov.br/api",
    data
  );
  return response.data;
};
