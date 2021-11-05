import React from 'react'
import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import { userData } from '../../dummydata'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="Academics Growth" grid dataKey="Active Students"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>

        </div>
    )
}
