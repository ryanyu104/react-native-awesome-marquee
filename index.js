import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Easing,
  Animated,
} from 'react-native';

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
    this.animatedTransformY = new Animated.Value(0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.height !== this.state.height) {
      this.runAnimation();
    }
  }

  runAnimation() {
    this.animatedTransformY.setValue(0);
    Animated.timing(this.animatedTransformY, {
      duration: this.props.duration,
      toValue: -this.state.height / 2,
      easing: Easing.linear,
    }).start(() => this.runAnimation());
  }

  wrapperOnLayout(e) {
    this.setState({
      height: Math.round(e.nativeEvent.layout.height),
    });
  }

  render() {
    const {
      children,
    } = this.props;

    const cloneChildren = React.Children.map(children, children => React.cloneElement(children));
    const reactElementArr = [children, cloneChildren];

    return (
      <View style={[styles.container, { height: this.props.height }]}>
        <Animated.View
          style={{
            transform: [{ translateY: this.animatedTransformY }],
          }}
        >
          <View
            onLayout={(event) => this.wrapperOnLayout(event)}
          >
            {reactElementArr.map(reactEle => reactEle)}
          </View>
        </Animated.View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

Marquee.propTypes = {
  duration: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Marquee.defaultProps = {
  duration: 10000,
  height: 100,
};


export default Marquee;
