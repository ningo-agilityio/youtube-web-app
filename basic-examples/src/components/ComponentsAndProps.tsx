import React from 'react';

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

interface Person {
  firstName: string,
  lastName: string
}

interface Props {
  user: Person,
  logo: string
}

function formatName(user: Person) {
  return user.firstName + ' ' + user.lastName;
}

// class component
class Header extends React.Component<Props> {

  render() {
    const {user, logo} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Hello, {formatName(user)}!</h1>
        </header>
      </div>
    )
  }
}

export default Header;