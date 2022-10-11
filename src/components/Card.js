import React, { useState } from "react";
import {
  IoCloseCircleOutline,
  IoPersonAddOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

export default function Card({ offer, onDelete }) {
  const [detail, setDetail] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const getDetail = () => {
    return (
      <div>
        <hr />
        <IoInformationCircleOutline
          className="btn btn-about"
          onClick={() => console.log(`Detail valut ${detail}`)}
        />
      </div>
    );
  };

  const styles = {
    backgroundColor: offer.color,
    border: favorite ? "1px solid black" : "none",
  };

  return (
    <div
      className="card"
      id={offer.id}
      onMouseEnter={() => setDetail((prev) => (prev = true))}
      onMouseLeave={() => setDetail((prev) => (prev = false))}
      style={styles}
    >
      <div className="btn-deck">
        <IoPersonAddOutline
          className="btn btn-apend"
          onClick={() => {
            setFavorite((prev) => !prev);
          }}
        />
        <IoCloseCircleOutline
          className="btn btn-remove"
          onClick={() => onDelete(offer.id)}
        />
      </div>
      <h2>{offer.position}</h2>
      <h3>{offer.level}</h3>
      <div className="stack-flex">
        {offer.stack.map((item) => (
          <p className="stack-item" key={item}>
            {item}
          </p>
        ))}
      </div>
      <h1>{offer.salary}₽</h1>
      <p>
        {offer.location} {offer.company}
      </p>
      {detail ? getDetail() : null}
    </div>
  );
}
