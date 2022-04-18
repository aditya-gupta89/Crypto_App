import { Fragment } from "react";
import { Typography } from "antd";
const Contact=()=>{
return (
    <Fragment>
    <div class="container12">
    <Typography.Title level={2} className="home-title">Contact Us</Typography.Title>
    <form>
    <div className="input-box">
            <level className="details">Name</level>
            <input type="email" class="example1"  placeholder="Name"/>
        </div>
        <div className="input-box">
            <level className="details">Email address</level>
            <input type="email" class="example1"  placeholder="name@example.com"/>
        </div>
        <div class="input-box">
            <label className="details">Select your Query</label>
            <select className="example1" >
                <option>Web</option>
                <option>Tech Stack</option>
                <option>Technology</option>
                <option>Others</option>
            </select>
        </div>
        <div className="input-boxs">
            <level >Are you a interested in Crypto?</level>
            <input className="form-check-input" type="checkbox" />Yes
        </div>
        <div className="input-boxs">
            <level >Are you a Trader</level>
            <input className="form-check-input" type="checkbox" />Yes
        </div>

        <div class="input-box">
            <label className="details">Elaborate Your Concern</label>
            <textarea className="form-control" id="example2" rows="3"></textarea>
        </div>
        <button className="input-boxs">Submit</button>
    </form>

</div>

</Fragment>
)
}
export default Contact;
