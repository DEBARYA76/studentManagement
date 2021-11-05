import React from 'react'
import "./WidgetLg.css"

export default function WidgetLg() {
    const Button=({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }
    return (
        <>
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLargeTh">Students</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                         <td> <span className="widgetLgName">Subhashree Satapathy</span></td>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">5600/-</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="widgetLgImg" />
                         <td> <span className="widgetLgName">Somalin Das</span></td>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">5600/-</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg" alt="" className="widgetLgImg" />
                         <td> <span className="widgetLgName">Pinaki Priyadarshani</span></td>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">5600/-</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=" alt="" className="widgetLgImg" />
                       <td> <span className="widgetLgName">Shiny Rosa</span></td>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">5600/-</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/asian-woman-working-laptop-at-office-picture-id1015267018?k=20&m=1015267018&s=612x612&w=0&h=DNBVrLeueOghECrbU3llimgh4hP821F6qSBknM4PKzA=" alt="" className="widgetLgImg" />
                         <td> <span className="widgetLgName">Asmita Santra</span></td>
                    </td>
                    <td className="widgetLgDate">2 July 2021</td>
                    <td className="widgetLgAmount">5600/-</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
       </> 
    )
}