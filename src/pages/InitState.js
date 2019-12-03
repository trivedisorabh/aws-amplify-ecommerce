// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useEffect, useContext} from 'react'
import { Analytics, Auth, API } from 'aws-amplify'
import isoCountries from '../config/isoCountries'
import AppContext from '../context/AppContext'

function InitState() {
    const {items, user, storeUser, addItems} = useContext(AppContext)

    useEffect(() => {
        if (items.length === 0) {
            API.get('awsamplifyecommerceapi', '/items')
            .then(response => {
                addItems(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }, [items.length, addItems])

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(data => {
                if (user === null) {
                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                        console.log(data)
                    }

                    var countryCode = null

                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                        console.log('Updating Pinpoint endpoint [InitState]')
                    }

                    if (isoCountries.hasOwnProperty(data.attributes['custom:country'])) {
                        countryCode = isoCountries[data.attributes['custom:country']]
                    }

                    Analytics.updateEndpoint({
                        ChannelType: 'EMAIL',
                        Address: data.attributes.email,
                        location: {
                            city: data.attributes['custom:city'],
                            country: countryCode,
                            postalCode: data.attributes['custom:postcode'],
                            region: data.attributes['custom:state']
                        },
                        optOut: 'NONE',
                        attributes: {
                            firstName: [data.attributes.given_name],
                            hasShoppingCart: ['false'],
                            completedOrder: ['false']
                        },
                        metrics: {
                            itemsInCart: 0,
                            orderNumber: "0"
                        }
                    })

                    storeUser(data.attributes)
                }

                if (user != null) {
                    
                }
            })
    }, [user, storeUser])

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default InitState