"use client"
import React from 'react'
import CustomizedTables from './CustomizedTables'
import { Tab, Tabs } from 'react-bootstrap'
import PriceComp from "./PriceComp"

const TyentvsKAngan = () => {
  return (
    <div>
        <div className="container">
        <Tabs variant="tabs"
          defaultActiveKey="home"
          id="uncontrolled-tab-example" className="m-0 p-0"
          style={{margin:'0px !imortant', padding: '0px !important'}}
        >
          <Tab eventKey="home" className="tabcontentdesign" title="Technical Overview">
            <CustomizedTables />
          </Tab>
          <Tab eventKey="profile" className="tabcontentdesign"  title="Detail Comparison">
            <PriceComp />
          </Tab>
        </Tabs>
      </div>

    </div>
  )
}

export default TyentvsKAngan