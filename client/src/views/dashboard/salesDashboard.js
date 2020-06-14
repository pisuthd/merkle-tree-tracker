import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardFooter, CardLink, CardText, Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsBG from "../../components/cards/minimalStatisticsBGCard";

import VisitSalesStatisticsCard from "../../components/cards/visitSalesStatistics";
import WeeklyStatisticsLineChartCard from "../../components/cards/weeklyStatisticsLineChartCard";

import MonthlySalesStatisticsBarChartCard from "../../components/cards/monthlySalesStatisticsBarChartCard";
import ShoppingCartCard from "../../components/cards/shoppingCartCard";

import ProjectStatsDonutChartCard from "../../components/cards/projectStatsDonutChartCard";


import cardImg09 from "../../assets/img/photos/09.jpg";
import cardImgEle01 from "../../assets/img/elements/01.png";

// Styling

class SalesDashboard extends Component {
   render() {
      return (
         <Fragment>
            {/* Minimal statistics charts */}
            <Row className="row-eq-height">
               <Col sm="12" md="3">
                  <MinimalStatisticsBG
                     cardBgColor="gradient-blackberry"
                     statistics="278"
                     text="New Projects"
                     iconSide="right"
                  >
                     <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBG>
               </Col>
               <Col sm="12" md="3">
                  <MinimalStatisticsBG
                     cardBgColor="gradient-ibiza-sunset"
                     statistics="156"
                     text="New Clients"
                     iconSide="right"
                  >
                     <Icon.User size={56} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBG>
               </Col>
               <Col sm="12" md="3">
                  <MinimalStatisticsBG
                     cardBgColor="gradient-green-teal"
                     statistics="64.89 %"
                     text="Conversion Rate"
                     iconSide="right"
                  >
                     <Icon.PieChart size={56} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBG>
               </Col>
               <Col sm="12" md="3">
                  <MinimalStatisticsBG
                     cardBgColor="gradient-pomegranate"
                     statistics="423"
                     text="Support Tickets"
                     iconSide="right"
                  >
                     <Icon.LifeBuoy size={56} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBG>
               </Col>
            </Row>

            {/* VISIT & SALES STATISTICS */}
            <Row className="row-eq-height">
               <Col sm="12" lg="6" xl="8">
                  <VisitSalesStatisticsCard
                     visitSalesData={AdvancedCardData.VisitSalesData}
                     cardTitle="Visit & Sales Statistics"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
               <Col sm="12" lg="6" xl="4">
                  <WeeklyStatisticsLineChartCard
                     weeklySalesStatisticsBarChartData={AdvancedCardData.WeeklySalesStatisticsBarChartData}
                     cardBgColor="gradient-blackberry"
                     cardTitle="Weekly Statistics"
                     statisticsAmount="$ 66.89"
                     statisticsRangeAmount="Week3 +14.44"
                  />
               </Col>
            </Row>

            {/*Card, sales state & floating action butotn*/}
            <Row>
               <Col sm="12" md="4">
                  <Card className="card card-outline-primary box-shadow-0 text-center p-3">
                     <CardBody>
                        <div className="row d-flex">
                           <div className="col align-self-center">
                              <img src={cardImgEle01} width="190" alt="Card cap 01" className="" />
                           </div>
                           <div className="col align-self-center">
                              <CardTitle className="mt-3">Brand Minute</CardTitle>
                              <CardText>Donut toffee candy brownie soufflé macaroon.</CardText>
                              <Button className="btn btn-raised btn-primary">Buy Now</Button>
                           </div>
                        </div>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="4">
                  <ProjectStatsDonutChartCard
                     projectStatsDonutChartData={AdvancedCardData.ProjectStatsDonutChartData}
                     cardTitle="Sales Stats"
                     cardSubTitle="Marketing Tasks"
                  />
               </Col>
               <Col sm="12" md="4">
                  <Card className="text-left">
                     <CardBody>
                        <CardTitle>Floating Action Button</CardTitle>
                        <CardText>With Header & Footer</CardText>
                     </CardBody>
                     <div className="card-img">
                        <img width="100%" src={cardImg09} alt="Card cap 09" />
                        <Link to="/cards/basic-card" className="btn btn-floating halfway-fab btn-large bg-danger">
                           <Icon.Plus size={25} color="#FFF" />
                        </Link>
                     </div>
                     <CardBody>
                        <CardText>Bear claw sesame snaps gummies.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                     </CardBody>
                     <CardFooter>
                        1 day ago{" "}
                        <Badge className="float-right" color="success">
                           Technology
                        </Badge>
                        <Badge className="float-right mr-1" color="danger">
                           Mobile
                        </Badge>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>

            {/* Monthly Statistics & Shopping Cart */}
            <Row className="row-eq-height">
               <Col sm="12" md="8">
                  <ShoppingCartCard shoppingCart={AdvancedCardData.ShoppingCart} cardTitle="Shopping Cart" />
               </Col>
               <Col sm="12" md="4">
                  <MonthlySalesStatisticsBarChartCard
                     monthlySalesStatisticsBarChartData={AdvancedCardData.MonthlySalesStatisticsBarChartData}
                     cardTitle="Statistics"
                     cardSubTitle="Last 6 Months Sales"
                  />
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default SalesDashboard;
