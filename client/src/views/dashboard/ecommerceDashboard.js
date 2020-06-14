import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

import * as Icon from "react-feather";

import { StaticCardData } from "../cards/staticCardData";
import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsChart from "../../components/cards/minimalStatisticsWithChartCard";
import ProductsSalesChartCard from "../../components/cards/productsSalesChartCard";

import MonthlySalesStatisticsBarChartCard from "../../components/cards/monthlySalesStatisticsBarChartCard";
import ShoppingCartCard from "../../components/cards/shoppingCartCard";

import VisitSalesStatisticsCard from "../../components/cards/visitSalesStatistics";
import WeeklyStatisticsLineChartCard from "../../components/cards/weeklyStatisticsLineChartCard";

import HobbiesStatisticsBarChartCard from "../../components/cards/hobbiesStatisticsBarChartCard";
import UserListCard from "../../components/cards/userListCard";
import ProjectStatsDonutChartCard from "../../components/cards/projectStatsDonutChartCard";

// Styling

class EcommerceDashboard extends Component {
   render() {
      return (
         <Fragment>
            {/* Minimal statistics charts */}
            <Row className="row-eq-height">
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     cardBgColor="gradient-blackberry"
                     statistics="$2156"
                     text="Total Tax"
                     iconSide="right"
                  >
                     <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     cardBgColor="gradient-ibiza-sunset"
                     statistics="$1567"
                     text="Total Earning"
                     iconSide="right"
                  >
                     <Icon.Box size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     cardBgColor="gradient-green-teal"
                     statistics="$4566"
                     text="Total Sales"
                     iconSide="right"
                  >
                     <Icon.Filter size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart
                     chartData={StaticCardData.ChartistData}
                     cardBgColor="gradient-pomegranate"
                     statistics="$4566"
                     text="Total Sales"
                     iconSide="right"
                  >
                     <Icon.DollarSign size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart>
               </Col>
            </Row>
            {/* VISIT & SALES STATISTICS */}
            <Row>
               <Col sm="12">
                  <ProductsSalesChartCard
                     productsSalesData={AdvancedCardData.ProductsSalesData}
                     cardTitle="Products Sales"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
            </Row>
            {/* Monthly Statistics & Shopping Cart */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <MonthlySalesStatisticsBarChartCard
                     monthlySalesStatisticsBarChartData={AdvancedCardData.MonthlySalesStatisticsBarChartData}
                     cardTitle="Statistics"
                     cardSubTitle="Last 6 Months Sales"
                  />
               </Col>
               <Col sm="12" md="8">
                  <ShoppingCartCard shoppingCart={AdvancedCardData.ShoppingCart} cardTitle="Shopping Cart" />
               </Col>
            </Row>
            {/* Visit - Sales Statistics & Weekly Statistics */}
            <Row className="row-eq-height">
               <Col sm="12" md="8">
                  <VisitSalesStatisticsCard
                     visitSalesData={AdvancedCardData.VisitSalesData}
                     cardTitle="Visit & Sales Statistics"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
               <Col sm="12" md="4">
                  <WeeklyStatisticsLineChartCard
                     weeklySalesStatisticsBarChartData={AdvancedCardData.WeeklySalesStatisticsBarChartData}
                     cardBgColor="gradient-blackberry"
                     cardTitle="Statistics"
                     statisticsAmount="$ 78.89"
                     statisticsRangeAmount="Week2 +15.44"
                  />
               </Col>
            </Row>
            {/* Hobbies, USer List & Projects Stats */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <ProjectStatsDonutChartCard
                     projectStatsDonutChartData={AdvancedCardData.ProjectStatsDonutChartData}
                     cardTitle="Projects Stats"
                     cardSubTitle="Project Tasks"
                  />
               </Col>

               <Col sm="12" md="4">
                  <UserListCard userListData={AdvancedCardData.UserListData} cardTitle="Users List" />
               </Col>
               <Col sm="12" md="4">
                  <HobbiesStatisticsBarChartCard
                     hobbiesStatisticsBarChartData={AdvancedCardData.HobbiesStatisticsBarChartData}
                     cardTitle="Statistics"
                     cardSubTitle="Hobbies"
                  />
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default EcommerceDashboard;
