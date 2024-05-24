import axios from "axios";

const api = {
    async getData() {
      try {
        const response = await axios.get("https://demotrainiq.com/case/dashboard");
        const arrayData = Object.entries(response.data.data);
        return arrayData;
      } catch (error) {
        throw error;
      }
    },
  };

export default api;
