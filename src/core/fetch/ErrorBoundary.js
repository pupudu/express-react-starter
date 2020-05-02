import React from 'react';
import { Container } from '@material-ui/core';
import { Flex } from '@chakra-ui/core';

export class ErrorBoundary extends React.Component {
  state;

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const err = this.state.error;
    if (err) {
      return (
        <Container>
          <Flex justifyContent="center" alignItems="center">
            <div>
              <h1>Oops! Something went wrong.</h1>
              {JSON.stringify(err, null, 2)}
            </div>
          </Flex>
        </Container>
      );
    }
    return this.props.children;
  }
}
