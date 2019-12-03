// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const signUpConfig = {
  header: 'Create an ACME Store Account',
  hiddenDefaults: ['phone_number'],
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'First name',
      key: 'given_name',
      required: true,
      displayOrder: 100,
      type: 'string'
    },
    {
      label: 'Last name',
      key: 'family_name',
      required: true,
      displayOrder: 101,
      type: 'string'
    },
    {
      label: 'Street address',
      key: 'street',
      required: true,
      displayOrder: 102,
      type: 'string',
      custom: true
    },
    {
      label: 'City',
      key: 'city',
      required: true,
      displayOrder: 103,
      type: 'string',
      custom: true
    },
    {
      label: 'State',
      key: 'state',
      required: true,
      displayOrder: 104,
      type: 'string',
      custom: true
    },
    {
      label: 'Post/Zip code',
      key: 'postcode',
      required: true,
      displayOrder: 105,
      type: 'string',
      custom: true
    },
    {
      label: 'Country',
      key: 'country',
      required: true,
      displayOrder: 106,
      type: 'string',
      custom: true
    }
  ]
};

export default signUpConfig