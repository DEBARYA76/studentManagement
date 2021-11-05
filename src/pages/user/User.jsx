import React from 'react'
import "./User.css"
import {Link} from "react-router-dom"
import {CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons"
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h3 className="userTitle">Edit User</h3>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuUH6UoJirybmPeg0QZk6p8ZxSIUclRikTQ&usqp=CAU" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <div className="userShowUsername">Somalin Das</div>
                            <div className="userShowUserTitle">class X</div>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Personal Details</span>
                        
                        <div className="userShowInfo">
                            <PermIdentity className=""userShowIcon/>
                            <span className="userShowInfoTitle">Soma2407</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className=""userShowIcon/>
                            <span className="userShowInfoTitle">24 July 2000</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className=""userShowIcon/>
                            <span className="userShowInfoTitle">soma@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <PhoneAndroid className=""userShowIcon/>
                            <span className="userShowInfoTitle">8245678909</span>
                        </div>
                       
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Student Name" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="Student Email" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="Mobile Number" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Age</label>
                                <input type="number" placeholder="Student Age" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuUH6UoJirybmPeg0QZk6p8ZxSIUclRikTQ&usqp=CAU" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id ="file" style={{display:"none"}} />
                            </div>
                            <Link to="/users">
                            <button className="userUpdateButton">Update</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
