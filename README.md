**components** - describe a part of the UI, reusable and can be nested
	functional components
	class components

**functional components** - javascript function, can optionally recieve props (properties)


**Hooks** - lets you use state and other React features w/o writng a class, don't work inside classes, allows you to reuse stateful component logic

**useState Hook**
1. Import state
2. Call it, passing in a default value
3. Assign the return pair of values to variables using RDD structuring
4. Use them in the render function

**Rules of Hooks:**
Only call Hooks at the top level
Don't call Hooks inside loops, conditions or nested functions
Only call hooks from React functions

**useState hook**
- useState allows you to add state to functional components
- state doesn't have to be an object
- when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function

**useEffect**
- lets you perform side effects in functional components
- replacement for componentDidMount, componentDidUpdate, componentWillUnmount
- runs everytime the component renders

1. import useEffect
2. call it within the component
3. pass in function which needs to be executed after every render of the component

conditionally run an effect - use the second parameter of useEffect (array)

when you want to execute some component cleanup code, you include it in the function and return that function from the function passed to useEffect

**useContext hook:**
1. create context
2. provide context value
3. import the context and import useContext
4. assign the useContext to a variable


**useReducer**
- hook that is used for state management
- useState is built using useReducer
- useReducer(reducer, initialState)
- newState = reducer(currentState, action)
- useReducer - returns a pair of values - [newState, dispatch]
- using action as an object you can use additional data in the reducer function
- using state as an object you can keep track of multiple state values
- multiple state variables that have the same state transitions it's good to have multiple use reducers making use of the same reducer function to avoid the complexity of merging a state or having duplicate code


**useReducer with useContext**
- able to share values
- maintaining the state in App.js but able to share that state with the different components nested at different levels in the component tree


**useState**
- manage primitive types (ex: number, string, boolean)
- only one or two state transitions
- unrelated state transitions
- no business logic
- local component state, multiple dispatch update functions

**useReducer**
- manage object or array (ex: {fname, lname, age})
- three or more state transitions
- related state transitions
- complex business logic (complex data transformation) 
- global component state, only one dispatch needed

**useCallback**
- return a memoized version of the callback function that only changes if one of the dependencies has changed
- useful when passing callbacks
- optimize child components to prevent unnecessary renders
- useCallback when you need to cache a function

**useMemo**
- caches the result of a invoked function

**useRef**
- imperatively access dom nodes in react functional components
- remembers the stored data after other state variables cause a rerender of the component