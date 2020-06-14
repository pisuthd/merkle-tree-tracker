// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { Bar, Line, Scatter, Radar, Pie, Polar, Doughnut } from "react-chartjs-2";

import {
   BarData,
   LineChartData,
   AreaChartdata,
   ScatterData,
   DoughnutData,
   RadarData,
   PieData,
   PolarData
} from "./chartData";

const ChartJS = props => (
   <Fragment>
      <Row>
         <Col sm="12" className="content">
            <div className="content-header text-dark">List</div>
            <p className="content-sub-header">
               List groups are a flexible and powerful component for displaying not only simple lists of elements, but
               complex ones with custom content.
            </p>
         </Col>
      </Row>

      <Row>
         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>Bootstrap Grid options</CardTitle>
               </CardHeader>
               <CardBody>
                  <Line height={400} data={LineChartData.data} options={LineChartData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>AREA CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Line height={400} data={AreaChartdata.data} options={AreaChartdata.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>SCATTER CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Scatter height={400} data={ScatterData.data} options={ScatterData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>BAR CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Bar height={400} data={BarData.data} options={BarData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>DOUGHNUT CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Doughnut height={400} data={DoughnutData.data} options={DoughnutData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>RADAR CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Radar height={400} data={RadarData.data} options={RadarData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>PIE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Pie height={400} data={PieData.data} options={PieData.options} />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>POLAR CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <Polar height={400} data={PolarData.data} options={PolarData.options} />
               </CardBody>
            </Card>
         </Col>
      </Row>
   </Fragment>
);

export default ChartJS;
