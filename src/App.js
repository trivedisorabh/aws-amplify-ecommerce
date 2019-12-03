// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

import signUpConfig from './config/signUpConfig'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'

import './App.css'

function App() {
    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}>All things Alexa</Header>
            </Container>
            <Container fluid>
                <Carousel />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Smart displays</Header>
                <p>Everything you love about Alexa, and now she can show you things. Get the weather forecast, watch the news, and see lyrics with Amazon Music.</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='echo' />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Echo companions</Header>
                <p>Enjoy richer, more dynamic music with devices designed to work with Echo smart speakers or your existing sound system.</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='companion' />
            </Container>
        </div>
    );
}

export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}