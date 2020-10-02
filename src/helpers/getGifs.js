export const getGifs = async (category) => {
  //el url obtenido de la prueba en postman
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
    category
  )}&api_key=nKjvvfpDmNoy4Cz97n8xQLBFaOv8KcbL`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //hacemos lectura del lo que nos llega por fetch y por medio de map limpiamos los datos para optener los 3 campos que nos interesan: id, title, url.
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //agregamos el ? a imagenes para preguntar si viene vacio
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
