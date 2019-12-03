// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid, Divider, Input, Segment, Button } from 'semantic-ui-react'
import styled from 'styled-components'

function CheckoutSummary(props) {
    const {user, total} = props

    function getAtt(name) {
        return user ? user[name] : ""
    }

    return (
        <div>
            <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <BoldText>1</BoldText>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <BoldText>Shipping address</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <NormalText>{getAtt('given_name') + ' ' + getAtt('family_name')}
                            <br/>{getAtt('custom:street')}<br/>{getAtt('custom:city')}, {getAtt('custom:state')} {getAtt('custom:postcode')}
                            <br/>{getAtt('custom:country')}
                            </NormalText>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <BoldText>2</BoldText>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <BoldText>Payment method</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7} verticalAlign='middle'>
                            <Grid columns={2}>
                                <Grid.Column width={2}><img src='/images/misc/amex.gif' alt=''/></Grid.Column>
                                <Grid.Column width={10}>
                                    <b>American Express</b>
                                </Grid.Column>
                            </Grid>
                            <br/>
                            <Input fluid icon='credit card' iconPosition='left' placeholder='Credit card...' onChange={(event, data)=>props.onCardUpdate(data)} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Segment>
                                <Grid columns={2}>
                                    <Grid.Column width={4}>
                                        <Button color='orange' loading={props.placedOrder} onClick={props.onOrder}>Place your order</Button>
                                    </Grid.Column>
                                    <Grid.Column width={8} verticalAlign='middle'>
                                        <TotalText>Order total: ${total}</TotalText>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </div>
    )
}

export default CheckoutSummary

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
`
const NormalText = styled.div`
  font-size: 1em;
`
const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold
  color: #B12704;
`