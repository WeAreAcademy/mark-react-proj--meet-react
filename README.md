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

## Exercise 0: Introducing React

So far we have focused on programs which we interact with via the terminal. Now we are going to move on to those which we can interact with via the browser.

React is a popular web development JavaScript library (with TS support). It is used to build interactive websites. [This blog post](https://skillcrush.com/blog/what-is-react-js/#what) will help to introduce you to what ReactJS is all about. [React has its own extensive documentation](https://reactjs.org/) which we recommend for future thought. If you already have some familiarity with web development, it's a good place to begin, but if this is all new to you then hold off until you have some more familiarity with HTML. Note that the React docs mainly refer to JavaScript but all of the learnings translate into TypeScript. 

## Exercise 1: Installing and demoing

> 🎯 **Success criterion:** you can view the React web app on `localhost:3000`

Firstly, clone this repository to your local machine in some sensible place, for example:

```bash
cd ~/Development/Academy # or wherever you're organising everything
git clone https://github.com/WeAreAcademy/mark-react-proj--meet-react.git
```

Then, change into the new directory and install the files:

```bash
cd mark-react-proj--meet-react
yarn
```

Finally, run your first React app!

```bash
yarn start
```

This will run the app. This is a web app and is configured to run by default on your local machine at `localhost:3000`, which should open up in your browser automatically (but which you can also navigate to by putting `localhost:3000` into the url).

## Exercise 2: Reading, understanding and documenting

> 🎯 **Success criterion:** a document which outlines how you think this React app works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

1. Take some time to read and digest the code
2. Google things that you don't understand
3. Experiment with changing things
4. Produce a narrative document

> ⚠️ For now, you will have to refresh `localhost:3000` when you make changes to see them take effect. _(Instructor note: CRA hot reload / fast refresh seems not to be able to watch code inside `index.tsx`.)_

A good narrative document for this game would explain how `public/index.html` and `src/index.tsx` seem to be interacting to produce the HTML that gets rendered in your browser. A great narrative document would demonstrate this through code snippets and screenshots which show how changes you have made in the code lead to changes in the browser that are consistent with your theory.

> ⛏️ You may find it useful to use the **Inspector** in your browser developer tools to explore the rendered HTML elements. (Search online for how to do this if you are unsure.) At this point check that you are using one of our recommended browsers: preferably Google Chrome, and Firefox if not.

Things you should try to cover include:

- What's the importance of the `document.getElementById` argument? What happens if you change it?
- When you run the app, why do you see more things than are returned by your React app?
- What's the role of the `{` in TSX code?

## Exercise 3: Writing your own React component

> 🎯 **Success criterion:** a custom React component, `AboutMe`, which renders HTML to the browser at `localhost:3000`.

Now it's time to look at `AboutMe`. This is a currently relatively minimal React component.

Can you populate it with some information about yourself (a short bio, maybe a CV-esque thing) and render the component through your React app?

(It's up to you as to whether you replace other bits of HTML or the other component, `MyFirstReactComponent`; all that's required is that you can see your component's rendered HTML. Don't forget that you'll need to refresh in the browser when you make changes!)

## Exercise 4: Check your understanding

> 🎯 **Success criterion:** a conversation with a Faculty member and amended comments.

Talk to a member of Faculty about your understanding of this React app so far.

Amend your notes for any important points that come out of the conversation.

## Exercise 5: Commentary and reflection

> 🎯 **Success criterion:** documented reflections.
