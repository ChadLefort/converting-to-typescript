import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';
import { Dimmer, Loader } from 'semantic-ui-react';
import HeroCards from '../components/HeroCards';
import { RootState, Dispatch } from '../reducers';
import { actionCreators } from '../actions/heroesActions';

const mapStateToProps = (rootState: RootState) => ({
  heroes: rootState.heroes.heroes,
  isFetching: rootState.heroes.fetching
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHeros: () => dispatch(actionCreators.fetchHeros())
});

const stateProps = returntypeof(mapStateToProps);
const distachProps = returntypeof(mapDispatchToProps);
type Props = typeof stateProps & typeof distachProps;

class Heroes extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.fetchHeros();
  }

  render() {
    const { heroes, isFetching } = this.props;

    if (isFetching) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return <HeroCards heroes={heroes} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
