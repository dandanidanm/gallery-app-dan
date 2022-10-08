import { useState, useEffect, useCallback } from "react";

export const useFetchImg = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const peticionFetch = useCallback(async () => {
    const key = "client_id=gV_WjBQcMAVrjmv3Ejg0Oas_bZ55mteJGVfygXLahNY";

    let url = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      url = `https://api.unsplash.com/search/photos/?page=1&per_page=50&query=${encodeURI(
        input
      )}&${key}`;
    }

    setLoading(true);
    const res = await fetch(url);

    const data = await res.json();
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticionFetch();
  }, [peticionFetch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };
  return [images, loading, handleSubmit];
};
