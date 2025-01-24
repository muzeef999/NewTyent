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
          id="uncontrolled-tab-example"   className="d-flex justify-content-center align-items-center m-0 p-0 custom-tabs"
        >
          <Tab eventKey="home"  title="Technical Overview">
            <CustomizedTables />
          </Tab>
          <Tab eventKey="profile"   title="Detail Comparison">
            <PriceComp />
          </Tab>
        </Tabs>
      </div>

    </div>
  )
}

export default TyentvsKAngan