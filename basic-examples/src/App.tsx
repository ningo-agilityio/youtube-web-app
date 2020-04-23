import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Person {
  firstName: string,
  lastName: string
}

const user = {
  firstName: 'Ngan',
  lastName: 'Tong'
}

function formatName(user: Person) {
  return user.firstName + ' ' + user.lastName;
}

// function component
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Hello, {formatName(user)}!</h1>

      </header>
    </div>
  );
}
// return <>...</> or return <div>...</div>

// class component
class App1 extends React.Component {
  render() {
    return <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Hello, {formatName(user)}!</h1>

        </header>
      </div>
    </>
  }
}

const App3 = (name: string) => <h1>Hello, {name}</h1>; // can not console.log
const App4 = () => {
  console.log("hello");
  return <h1 className="greeting">Hello, world!</h1>;
}

const element1 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
)

const element2 = (<h1 className="greeting">Hello, world!</h1>);

export default App;
