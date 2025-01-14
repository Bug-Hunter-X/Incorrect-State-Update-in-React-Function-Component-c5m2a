```javascript
//Correct way to update state in React function component
const [count, setCount] = useState(0);

const increment = () => {
  setCount(prevCount => prevCount + 1); //This will trigger re-render in React
};
```