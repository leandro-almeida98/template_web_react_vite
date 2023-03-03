import axios from "axios";

export const fetch_login = async (data: any) => {
  const { data: response } = await axios.post(
    "http://jogosapidev.sec.ba.gov.br/api/auth",
    data
  );
  return response.data;
};
