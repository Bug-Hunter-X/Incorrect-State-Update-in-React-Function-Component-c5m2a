```javascript
//Incorrect way to update state in React function component
const [count, setCount] = useState(0);

const increment = () => {
  count++; //This will not trigger re-render in React
  setCount(count); //This will trigger re-render
};
```