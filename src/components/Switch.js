import React from 'react'
import { Switch as PfSwitch } from 'patternfly-react'
import { enumMsg } from 'app-intl'

const Switch = (props) =>
  <PfSwitch
    onText={enumMsg('Switch', 'on')}
    offTest={enumMsg('Switch', 'off')}
    {...props}
  />

export default Switch
