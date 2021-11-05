import React from 'react'
import "./FeaturedInfo.css"
import {ArrowDownward,ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Fees</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">25,000/-</span>
                    <span className="featuredMoneyRate">-11.4%<ArrowDownward className="featuredIcon"/></span>
                    
                </div>
                <span className="featuredSub">Compared to Last Year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Avg. Marks</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">67%</span>
                    <span className="featuredMoneyRate">23.34%<ArrowUpward className="featuredIcon"/></span>
                    
                </div>
                <span className="featuredSub">Compared to Last Year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Performance</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Standard</span>
                    <span className="featuredMoneyRate">12.5%<ArrowUpward className="featuredIcon"/></span>
                    
                </div>
                <span className="featuredSub">Compared to Last Year</span>
            </div>
            
        </div>
    )
}
