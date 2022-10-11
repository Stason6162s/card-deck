import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import "../css/style.css";

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

export default function List() {
  const [offers, setOffers] = useState(offersList);
  const [animation, setAnimation] = useState(false);
  const timerRef = useRef(null);
  const list = document.getElementById("card-list");

  const startAnimation = () => {
    let counter = 0;
    timerRef.current = setInterval(() => {
      list.scrollBy(2, 0);
      counter++;
      if (counter === list.offsetWidth) {
        list.scrollTo(0, 0);
        counter = 0;
      }
    }, 20);
  };

  useEffect(() => {
    console.log(`Animation: ${animation}`);
    if (animation) {
      startAnimation();
    }
    return () => clearInterval(timerRef.current);
  }, [animation]);

  function deleteCard(id) {
    setOffers(() => offers.filter((offer) => offer.id !== id));
  }

  function fillCardList(offers) {
    let listItems = Object.values(offers).map((offer) => offer);
    return (
      <ul
        className="card-list"
        id="card-list"
        onMouseEnter={() => setAnimation((prev) => (prev = false))}
        onMouseLeave={() => setAnimation((prev) => (prev = true))}
      >
        {listItems.map((item) => {
          return (
            <li className="card-list-item" key={item.id}>
              <Card offer={item} onDelete={deleteCard} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <h2>Offers list</h2>
      <p>Use list view.</p>
      {offers.length > 0 ? fillCardList(offers) : <p>Offers not found</p>}
    </>
  );
}
