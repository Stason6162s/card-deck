import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../css/style.css";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const offersList = [
  {
    id: 1,
    position: "Web designer",
    level: "Middle",
    stack: ["Figma", "HTML", "Adobe"],
    salary: "60.000",
    location: "Moskow",
    company: "Yandex",
    color: "#fff1d5",
  },
  {
    id: 2,
    position: "Front-end Developer",
    level: "Senior",
    stack: ["React", "JavaScript", "Node.js"],
    salary: "110.000",
    location: "Ivanovo",
    company: "Gemforge",
    color: "#d5f5ff",
  },
  {
    id: 3,
    position: "React Developer",
    level: "Junior",
    stack: ["React", "JavaScript", "Redux"],
    salary: "45.000",
    location: "Ivanovo",
    company: "Gemforge",
    color: "#d5f5ff",
  },
  {
    id: 4,
    position: "QA Engineer",
    level: "Junior",
    stack: ["Testing", "SQL"],
    salary: "25.000",
    location: "Moskow",
    company: "Melnica",
    color: "#e3ffe4",
  },
  {
    id: 5,
    position: "Python",
    level: "Senior",
    stack: ["Python", "Git", "Docker"],
    salary: "103.000",
    location: "Saitn-Petersburg",
    company: "Russoft",
    color: "#81ecec",
  },
  {
    id: 6,
    position: "React Developer",
    level: "Junior",
    stack: ["React", "JavaScript", "Redux"],
    salary: "45.000",
    location: "Moscow",
    company: "Yandex",
    color: "#fff1d5",
  },
  {
    id: 7,
    position: "QA Engineer",
    level: "Junior",
    stack: ["Testing", "SQL"],
    salary: "25.000",
    location: "Moskow",
    company: "Melnica",
    color: "#e3ffe4",
  },
];

export default function Deck({ count, contenPerPage }) {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contenPerPage);
  const lastContentIndex = page * contenPerPage;
  const firstContentIndex = lastContentIndex - contenPerPage;
  const [offers, setOffers] = useState(offersList);

  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const getSlice = (offers) => {
    return offers.slice(firstContentIndex, lastContentIndex);
  };

  useEffect(() => {
    getSlice(offers);
  }, [offers]);

  function deleteCard(id) {
    setOffers(() => offers.filter((offer) => offer.id !== id));
  }

  function fillCardDeck(offers) {
    return (
      <div className="card-deck">
        <IoChevronBackCircleOutline
          className="btn btn-back"
          onClick={() => changePage(false)}
        />

        {getSlice(offers).map((offer) => {
          return <Card offer={offer} onDelete={deleteCard} key={offer.id} />;
        })}

        <IoChevronForwardCircleOutline
          className="btn btn-next"
          onClick={() => changePage(true)}
        />
      </div>
    );
  }

  return (
    <>
      <h2>Card deck, page #{page}</h2>
      <p>Page view using pagination method.</p>
      {offers.length > 0 ? fillCardDeck(offers) : <p>Offers not found</p>}
    </>
  );
}
