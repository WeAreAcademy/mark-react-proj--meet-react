---
module: react

level: 1

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Meet React

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

We're now going to start working with **React**, a JavaScript library (with TypeScript support) for building user interfaces.

## Learning Outcomes

- Identify the difference between HTML, (J/)TS and (J)/TSX
- Evaluate TypeScript values, variables and expressions inside TSX
- Explain the purpose of `ReactDOM.render`

## Exercise 1: Installing and demoing

**Success criterion:** you can view the React web app on `localhost:3000`

Firstly, clone this repository to your local machine in some sensible place, for example:

```bash
cd ~/Development/Academy # or wherever you're organising everything
git clone https://github.com/WeAreAcademy/mark-react-proj--meet-react.git
```

Then, change into the new directory and install the files:

```bash
cd mark-react-proj--met-react
yarn
```

Finally, run your first React app!

```bash
yarn start
```

The `start` script is configured such that the app will run by default on your local machine at `localhost:3000`, which should open up in your browser automatically (but which you can also navigate to).

## Exercise 2: Reading, understanding and documenting

**Success criterion:** a document which outlines how you think this React app works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

1. Take some time to read and digest the code
2. Google things that you don't understand
3. Experiment with changing things
4. Produce a narrative document

> ⚠️ For now, you will have to refresh `localhost:3000` when you make changes to see them take effect. _(Instructor note: CRA hot reload / fast refresh seems not to be able to watch code inside `index.tsx`.)_

A good narrative document for this game would explain how `public/index.html` and `src/index.tsx` seem to be interacting to produce the HTML that gets rendered in your browser. A great narrative document would demonstrate this through code snippets and screenshots which show how changes you have made in the code lead to changes in the browser that are consistent with your theory.

> ⛏️ You may find it useful to use the **Inspector** in your browser developer tools to explore the rendered HTML elements. (Search online for how to do this if you are unsure.)

Things you should try to cover:

- What's the importance of the `document.getElementById` argument? What happens if you change it?
- When you run the app, why do you see more things than are returned by your React app?
- What's the role of the `{` in TSX code?

## Exercise 3: TypeScript-specific notes

> 🎯 **Success criterion:** a document which outlines how this Hangman game uses some TypeScript features that don't exist in JavaScript.

The basic principles of variable assignment, control flow and functions are the same between TypeScript and JavaScript (and also Python).

TypeScript does introduce some additional things, though:

| Item | JavaScript example | TypeScript example |
| --- | --- | --- |
| Variable declaration | <pre>let counter = 10</pre> | <pre>let counter: number = 10</pre> |
| Function declaration | <pre>function printCounterValue() { <br /> &nbsp;console.log(counter); <br /> }</pre> | <pre>function printCounterValue(): void { <br /> &nbsp;console.log(counter); <br />}</pre> |
| Parameter declaration | <pre>function incrementCounter(n) { <br /> &nbsp;counter += n; <br /> &nbsp;return counter; <br /> }</pre> | <pre>function incrementCounter(n: number): number { <br /> &nbsp;counter += n; <br /> &nbsp;return counter; <br /> }</pre> |
| Interfaces | N/A | <pre>interface FootballMatch { <br/>&nbsp;homeGoals: number; <br/>&nbsp;awayGoals: number; <br/>&nbsp;teamNames: string[]; <br/>&nbsp;isFullTime: boolean; <br/>}</pre> |
| Types | N/A | <pre>type FootballPosition = 'striker' <br/>&nbsp;&#124; 'midfielder' <br/>&nbsp;&#124; 'defender' <br/>&nbsp;&#124; 'goalkeeper'</pre> |
| Type Assertion | N/A | <pre>const substituteBench = [<br/>&nbsp;'goalkeeper', <br/>&nbsp;'defender', <br/>&nbsp;'defender', <br/>&nbsp;'midfielder', <br/>&nbsp;'midfielder', <br/>&nbsp;'striker' <br/>] as FootballPosition[]</pre> |

Produce a document which explains:

- How do each of these things work?
- How are they used in the Hangman project?

If you are a bit baffled by TypeScript, you might want to [try this 1 hour course](https://scrimba.com/learn/intrototypescript).

## Exercise 4: Check your understanding

> 🎯 **Success criterion:** a conversation with a Faculty member and amended comments.

Talk to a member of Faculty about your understanding of the game and of TypeScript.

Amend your notes for any important points that come out of the conversation.

## Exercise 5: Extend the game

> 🎯 **Success criterion:** a game which can be playtested and which satisfies the specified requirements for each extension.

### Extension 1: Handle uppercase guesses

The game probably doesn't behave as a player would expect when they guess a letter in uppercase form.

Produce some acceptance criteria for a fix, and then try to implement a fix to pass those acceptance criteria.

(Acceptance criteria are really helpful here because there are at least two fundamentally different ways you could handle the user inputting an uppercase letter: require them to try again with a lowercase letter, or process the uppercase letter in a sensible way.)

### Extension 2: Hangman animation

The game currently prints out a slightly boring 'Lives remaining' message.

Can you extend the game so that an [ASCII stick person](https://www.google.com/search?q=ascii+stick+person&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjMy62_nfHtAhVAQhUIHV4qD1QQ_AUoAXoECBAQAw&biw=1536&bih=801) gets slowly assembled, like in the traditional whiteboard version of the game?

## Exercise 6: Commentary and reflection

**Success criterion:** documented reflections.
