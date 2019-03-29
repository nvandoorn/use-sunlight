import React from 'react'

import { storiesOf } from '@storybook/react'

import { DemoComponent } from '../src/demo-component'

storiesOf('DemoComponent', module).add('with heading', () => (
  <DemoComponent>
    <h1 style={{ fontSize: '4em' }}>Hello world</h1>
  </DemoComponent>
))
