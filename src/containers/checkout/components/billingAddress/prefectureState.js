import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prefectures from './prefectureConstants';
import States from './stateConstants';

class PrefectureState extends PureComponent {
  static propTypes = {
    country: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      prefectureState: '',
    };
  }

  handleChange = e => this.setState({ prefectureState: e.target.value })

  renderOptions = (country, prefectures, states) => {
    switch (country) {
      case 'Japan (JA)': return prefectures.map(({ en, kanji }) => (
        <option
          key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
          value={kanji}
        >{kanji} - {en}
        </option>
      ));
      case 'United States (US)': return states.map(({ name, code }) => (
        <option
          key={new Buffer(`${name}${code}`, 'utf8').toString('base64')}
          value={code}
        >{name} ({code})
        </option>
      ));
      default: return (
        <input
          name="prefectureState"
          type="text"
          onChange={this.handleChange}
          value={this.state.prefectureState}
        />
      );
    }
  }

  render() {
    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>State / Prefecture <span className="required">*</span></p>
          {this.renderOptions(this.props.country, Prefectures, States)}
        </div>
      </div>
    );
  }
}
export default PrefectureState;
