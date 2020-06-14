import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";

import * as Icon from "react-feather";

import { StaticCardData } from "../cards/staticCardData";
import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsChart2 from "../../components/cards/minimalStatisticsWithChart2Card";

import DiscoverPeopleListCard from "../../components/cards/discoverPeopleListCard";
import SalesAnalysisChartCarda from "../../components/cards/salesAnalysisChartCard";

import FitnessStatisticsChart from "../../components/cards/fitnessStatisticsWithChartCard";

import SalesPerVisitChartCard from "../../components/cards/salesPerVisitChartCard";
import DailyDietListCard from "../../components/cards/dailyDietListCard";

import UserStatisticsChartCard from "../../components/cards/userStatisticsChartCard";
import CarouselSliderCard from "../../components/cards/carouselSliderCard";
import EarningStatisticsChartCard from "../../components/cards/earningStatisticsChartCard";

class AnalyticsDashboard extends Component {
   render() {
      return (
         <Fragment>
            {/* Statistics */}
            <Row className="row-eq-height">
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart2
                     chartData={StaticCardData.ChartistData2}
                     cardBgColor="bg-danger"
                     statistics="$2156"
                     text="Total Tax"
                     iconSide="right"
                  >
                     <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart2>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart2
                     chartData={StaticCardData.ChartistData2}
                     cardBgColor="bg-success"
                     statistics="$1567"
                     text="Total Earning"
                     iconSide="right"
                  >
                     <Icon.Box size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart2>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart2
                     chartData={StaticCardData.ChartistData2}
                     cardBgColor="bg-warning"
                     statistics="$4566"
                     text="Total Sales"
                     iconSide="right"
                  >
                     <Icon.Filter size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart2>
               </Col>
               <Col sm="12" md="6" xl="3">
                  <MinimalStatisticsChart2
                     chartData={StaticCardData.ChartistData2}
                     cardBgColor="bg-info"
                     statistics="$4566"
                     text="Total Sales"
                     iconSide="right"
                  >
                     <Icon.DollarSign size={36} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsChart2>
               </Col>
            </Row>
            {/* Discover people & sales analysis */}
            <Row className="row-eq-height">
               <Col sm="12" lg="6" xl="8">
                  <SalesAnalysisChartCarda
                     salesAnalysisData={AdvancedCardData.SalesAnalysisData}
                     cardTitle="Sales Analysis"
                     salesText="Sales"
                     visitText="Visits"
                     clickText="Clicks"
                  />
               </Col>
               <Col sm="12" lg="6" xl="4">
                  <DiscoverPeopleListCard
                     discoverPeopleList={AdvancedCardData.DiscoverPeopleList}
                     cardTitle="Peoples"
                  />
               </Col>
            </Row>
            {/* Fitness charts */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <FitnessStatisticsChart
                     donutChartData={StaticCardData.DonutChartData1}
                     dountChartClass="donut1"
                     textTop="Steps"
                     statisticsTop="3261"
                     textBottom="Steps Today's Target"
                     statisticsBottom="5000"
                     textColor="primary"
                  />
                  <Icon.TrendingUp size={60} strokeWidth="1" className="primary icon-dount-center" />
               </Col>
               <Col sm="12" md="4">
                  <FitnessStatisticsChart
                     donutChartData={StaticCardData.DonutChartData2}
                     dountChartClass="donut2"
                     textTop="Distance"
                     statisticsTop="7.6"
                     statisticsTopUnit="miles"
                     textBottom="Miles Today's Target"
                     statisticsBottom="10"
                     textColor="warning"
                  />
                  <Icon.Zap size={60} strokeWidth="1" className="warning icon-dount-center" />
               </Col>
               <Col sm="12" md="4">
                  <FitnessStatisticsChart
                     donutChartData={StaticCardData.DonutChartData3}
                     dountChartClass="donut3"
                     textTop="Calories"
                     statisticsTop="4,025"
                     statisticsTopUnit="kcal"
                     textBottom="kcla Today's Target"
                     statisticsBottom="5000"
                     textColor="danger"
                  />
                  <Icon.Heart size={60} strokeWidth="1" className="danger icon-dount-center" />
               </Col>
            </Row>

            {/* Sales per Visit & Daily Diet Chart */}
            <Row className="row-eq-height">
               <Col sm="12" md="8">
                  <SalesPerVisitChartCard
                     salesPerVisitData={AdvancedCardData.SalesPerVisitData}
                     cardTitle="Sales Per Visit"
                     salesText="Sales"
                     visitText="Visits"
                  />
               </Col>
               <Col sm="12" md="4">
                  <DailyDietListCard
                     dailyDietList={AdvancedCardData.DailyDietList}
                     cardTitle="Daily Diet"
                     cardSubTitle="Some quick example text to build on the card."
                  />
               </Col>
            </Row>
            {/* Misc Cards */}
            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <UserStatisticsChartCard
                     userStatisticData={AdvancedCardData.UserStatisticData}
                     fullName="Kevin Sullivan"
                     designation="UX Designer"
                  />
               </Col>
               <Col sm="12" md="4">
                  <CarouselSliderCard
                     cardTitle="Card Titile"
                     description="Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate cake."
                  />
               </Col>
               <Col sm="12" md="4">
                  <EarningStatisticsChartCard
                     earningStatisticData={AdvancedCardData.EarningStatisticData}
                     cardTitle="Earning"
                     cardSubTitle="Mon 18 - Sun 21"
                     earningAmount="$4295.36"
                     earningText="Total Earnings"
                  />
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default AnalyticsDashboard;
