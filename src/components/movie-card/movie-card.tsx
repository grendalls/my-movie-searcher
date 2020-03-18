import React, { useRef, useEffect } from 'react';

const MovieCard = ({ imageUrl, title, description, onAddFav, onDelFav }) => {
  const imageRef = useRef(null);

  return (
    <article>
      <img ref={imageRef} src="" alt="" />
      <section>
        <h3></h3>
        <p></p>
      </section>
    </article>
  );
};

export default MovieCard;
