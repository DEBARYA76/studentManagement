import './NewUser.css'
import {Link} from "react-router-dom"

export default function NewUser() {
    return (
        <div className="newUser">
           <h1 className="newUserTitle">New User</h1>
           <form className="newUserForm">
               <div className="newUserItem">
                   <label >Username</label>
                   <input type="text" placeholder="Username" />
               </div>
               <div className="newUserItem">
                   <label >Full Name</label>
                   <input type="text" placeholder="Enter fullname" />
               </div>
               <div className="newUserItem">
                   <label >Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                   <label for="male">Male</label>
                   <input type="radio" name="gender" id="female" value="female" />
                   <label for="male">Female</label>
                   <input type="radio" name="gender" id="others" value="others" />
                   <label for="male">Others</label>
                  </div>
               </div>
               <div className="newUserItem">
                   <label >Email</label>
                   <input type="email" placeholder="student@gmail.com" />
               </div>
               <div className="newUserItem">
                   <label >Mobile Number</label>
                   <input type="text" placeholder="Enter contact number" />
               </div>
               <div className="newUserItem">
                   <label >Password</label>
                   <input type="password" placeholder="Enter password" />
               </div>
               <div className="newUserItem">
                   <label>Active</label>
                   <select name="active" id="active" className="newUserSelect">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>
               <div className="newUserItem">
                   <Link to="/users"><div className="newUserButton">Create</div></Link>
                   
               </div>
           </form>
        </div>
    )
}
