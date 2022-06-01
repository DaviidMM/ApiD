import apis from "../data/apis.json";

export default function useApi(apiId) {
  return apis.filter((api) => api.id === apiId)[0];
}
