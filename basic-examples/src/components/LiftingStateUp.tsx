import React from 'react';

enum scaleNames {
  c = 'Celsius',
  f = 'Fahrenheit'
};

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: Function) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface BoilProps {
  celsius: number
}

function BoilingVerdict(props: BoilProps) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

interface TemProps {
  onTemperatureChange: Function,
  temperature: string,
  scale: string
}

class TemperatureInput extends React.Component<TemProps> {
  constructor(props: TemProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scal = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in :</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

interface Props { }

interface State {
  temperature: string,
  scale: string
}

class Calculator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
