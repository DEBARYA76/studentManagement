import React from 'react'
import "./WidgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Students</span>
    <ul className="widgetSmList">
      <li className="widgetSmListItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Mayank Mishra</span>
              <span className="widgetSmUserClass">class X</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon"  /> Display</button>
      </li>
      <li className="widgetSmListItem">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuWjj12d2VSe_8vxfAez3U92UgdyhlkvHAQ&usqp=CAU" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Lovlin Rath</span>
              <span className="widgetSmUserClass">class X</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon"  /> Display</button>
      </li>
      <li className="widgetSmListItem">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Soumya Mohanty</span>
              <span className="widgetSmUserClass">class X</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
      </li>
      <li className="widgetSmListItem">
          <img src="https://www.orissapost.com/wp-content/uploads/2020/06/carryminati-1024x576.jpg" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Ajay Nager</span>
              <span className="widgetSmUserClass">class X</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon" /> Display</button>
      </li>
      <li className="widgetSmListItem">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWlKVGJeILLo6n3_-9GgvdvWyz7MJbC1o7g&usqp=CAU" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
              <span className="widgetSmUsername">Naman Sahu</span>
              <span className="widgetSmUserClass">class X</span>
          </div>
          <button className="widgetSmButton"><Visibility className="widgetSmIcon"  /> Display</button>
      </li>
    </ul>
        </div>
    )
}