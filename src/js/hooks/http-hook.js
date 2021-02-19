import { useCallback } from "react";

export const useHttp = () => {
  const _urlBase = "https://pokeapi.co/api/v2";

  const request = useCallback(
    async (url = "", method = "GET", body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(_urlBase + url, {
          method,
          body,
          headers,
        });

        return response.json();
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return { request };
};
