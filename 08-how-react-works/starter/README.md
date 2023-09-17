The browser paint phase is performed by whatever browser the user is using
The render phase is performed by the React library → (React never touches the DOM)
The commit phase is performed by yet another library called ReactDOM

React does not touch the DOM, React only renders. It doesn’t know where the render result will go

create a sleeping habit and waking up early and learning react js

React was designed to be used independently from the platform (“hosts”) where elements will actually be shown and therefore react can be used with many different so called “hosts”

React is used with other hosts as well, for example we can build native mobile application for ios and android using React Native, we can build videos with react “Remotion”, we can create all kinds of documents like “word” , “pdf” , “figma designs” and many more → using so called “RENDERERS”
Renderer is actually a pretty terrible name because renderers do not render but they commit the result of render phase (this name comes from past, before react divided the render phase and commit phase)

HOW DIFFING WORKS:

learned about key prop (can be used to reset state of a component)
