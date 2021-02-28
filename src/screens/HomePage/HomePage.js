import React from 'react';
import { Container, Header, Message } from 'semantic-ui-react';

const HomePage = () => (
    <>
      <Container>
        <Message>
          <Header>Hi, and welcome to my API, all the data got pulled from Go Rest Api so if you want
            to
            make
            one of your own go on and check their page</Header>
        </Message>
      </Container>
      <Container>
        <Message>
          <a target="blank" href='https://gorest.co.in'>Click Here to visit their Page</a>
        </Message>
      </Container>
    </>
);

export default HomePage;
