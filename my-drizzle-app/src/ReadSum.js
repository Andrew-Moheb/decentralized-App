import React from "react";
class ReadSum extends React.Component {
  state = { dataKey: null };
  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Addition;

    var dataKey = contract.methods["sum"].cacheCall();

    this.setState({ dataKey });
  }
  render() {
    const { Addition } = this.props.drizzleState.contracts;

    const sum = Addition.sum[this.state.dataKey];

    return <p>Sum: {sum && sum.value}</p>;
  }
}
export default ReadSum;
