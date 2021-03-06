import React from 'react';

class ExampleSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAtomIds: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedAtomIds: JSON.stringify(nextProps.selectedAtomIds),
    });
  }

  onChangeSelection = (event) => {
    this.setState({
      selectedAtomIds: event.target.value,
    });
  }

  onBlurSelection = (event) => {
    let selectedAtomIds;

    try {
      selectedAtomIds = JSON.parse(event.target.value);
    } catch (err) {
      throw err;
    }

    this.props.onChangeSelection(selectedAtomIds);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onToggleMolecule}>
          Toggle Molecule
        </button>
        <h4>selectedAtomIds</h4>
        <input
          value={this.state.selectedAtomIds}
          onChange={this.onChangeSelection}
          onBlur={this.onBlurSelection}
        />
      </div>
    );
  }
}

ExampleSettings.propTypes = {
  selectedAtomIds: React.PropTypes.arrayOf(React.PropTypes.number),
  onChangeSelection: React.PropTypes.func,
  onToggleMolecule: React.PropTypes.func,
};

export default ExampleSettings;
