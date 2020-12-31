import React from "react";
import ReactDOM from "react-dom";

const adjective = "exciting";
const noun = "wood";
const verb = "chuck";

/**
 * This is a TypeScript function - but a special one! It's a React function component.
 *
 * React function components are JavaScript/TypeScript functions that return something that:
 *  - looks a bit like an HTML element (e.g. in /public/index.html)
 *  - can be written mostly like HTML
 *  - ultimately renders to HTML elements
 *  - _isn't technically_ HTML.
 *
 * This function is returning a 'JSX element'.
 *
 * For now, it's enough to think of it like HTML, but bear in mind that it isn't technically HTML that you're writing - you're writing JSX (which is an extension of JavaScript and TypeScript which makes it easier to write React code).
 */
function MyFirstReactComponent() {
  const yesYouCanUseVariablesHereToo = "hakuna matata";
  const names = ["Timone", "Pumba"];
  const doObjectsWorkToo = {
    answer: "yes",
    even: {
      when: {
        arbitrarily: {
          deep: "woah",
        },
      },
    },
  };

  return (
    <div>
      <h1>Hello world from React!</h1>
      <p>
        I'm written in React code into a target HTML element (and I'll happily
        obliterate anything in my way).
      </p>
      <p>
        But I get to do <b>{adjective} things</b> when I use a React app!
      </p>
      <p>
        Like using TypeScript variables to make things way easier to change!
      </p>
      <p>
        For example: how much {noun} could a {noun}
        {verb} {verb} if a {noun}
        {verb} could {verb} {noun}?
      </p>
      <p>
        <i>
          But make sure you're using variables correctly in your JSX or else
          you'll look as foolish as a nounverb that tries to verb noun
        </i>
      </p>
      <p>
        P.S. Because they're variables, I can even manipulate them like normal
        TypeScript expressions.
      </p>
      <ol>
        <li>Random padding: {noun.padStart(40, "> pad >")}</li>
        <li>SHOUTING MUCH?: {verb.toUpperCase() + "!!!!!"}</li>
        <li>
          Does {verb} contain the letter Q? {String(verb.includes("Q"))}
        </li>
        <li>
          So, as the saying goes:{" "}
          {`"${yesYouCanUseVariablesHereToo}" (credits: ${names.join(", ")})`}
        </li>
      </ol>
      <p>So, go on, make all your noises of admiration:</p>
      <ul>
        <li>{doObjectsWorkToo.answer}</li>
        <li>{doObjectsWorkToo.even.when.arbitrarily.deep}</li>
      </ul>
    </div>
  );
}

/**
 * Having defined a React component, we target an element in our HTML document and *render* our React component into it
 */
ReactDOM.render(
  <MyFirstReactComponent />,
  document.getElementById("arbitrarily-named-target")
);
