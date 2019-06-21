import React from 'react'
import ReactIntercom from 'react-intercom'

const appID = process.env.INTERCOM_ID

const Intercom = () => (appID ? <ReactIntercom appID={appID} /> : null)

export default Intercom
