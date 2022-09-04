import React, { useState } from "react";
import "./App.css";

const bookDB = {
  Javascript: [
    {
      name: "A Smarter Way to Learn JavaScript",
      rating: "4.1/5",
      desc: "Simple and clean approach to javascript.",
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      desc: "Advanced concept and current industry trends.",
    },
    {
      name: "JS for Dummies",
      rating: "4.0/5",
      desc: "Very beginner's friendly book for starters.",
    },
  ],

  Fiction: [
    {
      name: "The Hobbit",
      rating: "4.2/5",
      desc: "A Hobbit's exciting journey comprising of trolls,goblins. ",
    },
    {
      name: "Atlas Shrugged",
      rating: "3.7/5",
      desc: "Story of an alternate universe Earth under dictatorship.",
    },
    {
      name: "A Game of Thrones",
      rating: "4.8/5",
      desc: "A cruel fantasy world with supernatural and political elements",
    },
  ],
  SelfDevelp: [
    {
      name: "Rich Dad Poor Dad",
      rating: "4.1/5",
      desc: "Learn to manage your time,money and resources in this book.",
    },
    {
      name: "12 Rules for Life",
      rating: "4.5/5",
      desc: "Jordan Peterson's best seller on how to live life?",
    },
    {
      name: "How to not give a F***",
      rating: "4.9/5",
      desc: "Free yourself from the thought 'What will they think?'",
    },
  ],
};

export default function App() {
  const [gen, setGen] = useState("Fiction");

  function clickHandler(genre) {
    setGen(genre);
  }
  const buttons = Object.keys(bookDB).map((item) => {
    return (
      <button className="button" onClick={() => clickHandler(item)}>
        {item}
      </button>
    );
  });

  return (
    <div className="App">
      <h1>📚 Booker</h1>
      <h4>Check out some good books</h4>
      {buttons}
      <hr />
      {bookDB[gen].map((item) => {
        return (
          <div className="books">
            <h3>{item.name}</h3>
            <h4>{item.desc}</h4>
            <p>
              <strong>{item.rating}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
}
