// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import ChartistGraph from "react-chartist";
import ChartistLib from "chartist";
import "chartist/dist/chartist.min.css";

// import internal(own) modules
import { ChartistData } from "./chartistData";
import "../../../assets/scss/views/charts/chartist.scss";

const Chartist = props => (
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
                  <CardTitle>LINE WITH AREA CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.LineArea1Data}
                     type="Line"
                     options={{
                        height: "400px",
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        onlyInteger: true,
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        },
                        axisX: {
                           showGrid: false
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE WITH AREA CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.LineArea2Data}
                     type="Line"
                     options={{
                        height: "400px",
                        showArea: true,
                        fullWidth: true,
                        lineSmooth: ChartistLib.Interpolation.none(),
                        axisX: {
                           showGrid: false
                        },
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        },
                        chartPadding: {
                           top: 0,
                           right: 25,
                           bottom: 0,
                           left: 0
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE WITH AREA CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.LineArea3Data}
                     type="Line"
                     options={{
                        height: "400px",
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        onlyInteger: true,
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE WITH AREA CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.LineArea4Data}
                     type="Line"
                     options={{
                        // low: 650,
                        height: "400px",
                        low: 0,
                        showArea: true,
                        fullWidth: true
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.Line1Data}
                     type="Line"
                     options={{
                        height: "400px",
                        axisX: {
                           showGrid: false
                        },
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        },
                        fullWidth: true,
                        chartPadding: {
                           top: 0,
                           right: 25,
                           bottom: 0,
                           left: 0
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.Line2Data}
                     type="Line"
                     options={{
                        height: "400px",
                        axisX: {
                           showGrid: false
                        },
                        axisY: {
                           low: 0,
                           scaleMinSpace: 50
                        },
                        fullWidth: true,
                        chartPadding: {
                           top: 0,
                           right: 25,
                           bottom: 0,
                           left: 0
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.Line3Data}
                     type="Line"
                     options={{
                        height: "400px",
                        axisX: { showGrid: false },
                        axisY: {
                           scaleMinSpace: 30
                        },
                        fullWidth: true,
                        chartPadding: {
                           top: 0,
                           right: 50,
                           bottom: 0,
                           left: 0
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>SCATTER LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.ScatterLineData}
                     type="Line"
                     options={{
                        height: "400px",
                        axisX: { showGrid: false },
                        axisY: {
                           scaleMinSpace: 30
                        },
                        fullWidth: true
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>SCATTER LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.ScatterData}
                     type="Line"
                     options={{
                        height: "400px",
                        showLine: false,
                        axisX: {
                           labelInterpolationFnc: (value, index) => (index % 13 === 0 ? `W${value}` : null),
                           showGrid: false
                        },
                        axisY: {
                           scaleMinSpace: 30
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>BIO POLAR LINE CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.BiPolarLineData}
                     type="Line"
                     options={{
                        height: "400px",
                        high: 3,
                        low: -3,
                        showArea: true,
                        showLine: false,
                        showPoint: false,
                        fullWidth: true,
                        axisX: {
                           showGrid: false,
                           offset: 100,
                           labelInterpolationFnc: (value, index) => {
                              return index % 2 === 0 ? value : null;
                           }
                        },
                        axisY: {
                           scaleMinSpace: 30
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>BAR CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.BarData}
                     type="Bar"
                     options={{
                        high: 9,
                        height: "400px",
                        seriesBarDistance: 21,
                        axisX: {
                           showGrid: false,
                           offset: 100
                        },
                        axisY: {
                           scaleMinSpace: 30
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>DISTRIBUTED SERIES BAR CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.DistributedBarData}
                     type="Bar"
                     options={{
                        height: "400px",
                        showGrid: false,
                        distributeSeries: true,
                        axisY: {
                           scaleMinSpace: 30
                        }
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>DONUT CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.DonutData}
                     type="Pie"
                     options={{
                        height: "400px",
                        donut: true,
                        donutWidth: 60,
                        startAngle: 270,
                        total: 200,
                        showLabel: true
                     }}
                  />
               </CardBody>
            </Card>
         </Col>

         <Col sm="12">
            <Card>
               <CardHeader>
                  <CardTitle>DONUT CHART</CardTitle>
               </CardHeader>
               <CardBody>
                  <ChartistGraph
                     data={ChartistData.DonutData}
                     type="Pie"
                     options={{
                        height: "400px",
                        donut: true,
                        showLabel: true,
                        labelDirection: "implode"
                     }}
                  />
               </CardBody>
            </Card>
         </Col>
      </Row>
   </Fragment>
);

export default Chartist;
