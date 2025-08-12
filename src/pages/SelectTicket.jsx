import { useState } from "react";
import "../styles/SelectTicket.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import Button from "./../components/Button";
import svgImage from "../assets/Vector (1).svg";


function StepOne() {
  const [ticketInfo, setTicketInfo] = useLocalStorage("ticketInfo", {});
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      accessType: ticketInfo?.accessType ?? "regular",
      numOfTickets: ticketInfo?.numOfTickets ?? 1,
    },
    validationSchema: Yup.object({
      accessType: Yup.string().oneOf(["regular", "vip", "vvip"]).required(),
      numOfTickets: Yup.number().required(),
    }),
    onSubmit: (values) => {
      setTicketInfo(values);
      navigate("/upload");
    },
  });

  return (
    <>
    <div className="gridLines">
        <nav>
       <div className="ticz-box">
                <div className="navImageDiv">
                  <img src={svgImage} alt="" className="navImage" />
                </div>
                
                <p className="ticz-text">GenTix  </p>
              </div>
          <a href="" className="first-link">Events</a>
          <a href="" className="second-link">My Tickets</a>
          <a href="" className="second-link">About Project</a>


      </nav>
      <main className="container">
     

        <form onSubmit={formik.handleSubmit} className="second-container">
          
          <div className="ticket-selection">
            <p className="type">Select Ticket Type:</p>

            <div className="ticket-boxes">
              {/* first radio button */}
              <label
                htmlFor="radio1"
                // className="first-radio ticket-type active"
                className={` first-radio ticket-type ${formik.values.accessType === "regular" ? "active" : ""}`}
              >
                <h2>Free</h2>
                <p className="access">REGULAR ACCESS</p>
                <p className="num">20/52</p>
                <input
                  type="radio"
                  name="accessType"
                  id="radio1"
                  value="regular"
                  className={` radio `}
                  checked={formik.values.accessType === "regular"}
                  onChange={formik.handleChange}
                />
              </label>

              {/* type 2  */}
              <label
                htmlFor="radio2"
                className={` first-radio ticket-type ${formik.values.accessType === "vip" ? "active" : ""}`}
              >
                <h2>$150</h2>

                <p className="access">VIP ACCESS</p>
                <p className="num">20/52</p>
                <input
                  type="radio"
                  name="accessType"
                  id="radio2"
                  value="vip"
                  className={` radio `}
                  checked={formik.values.accessType === "vip"}
                  onChange={formik.handleChange}
                />
              </label>

              {/* type 3 */}
              <label
                htmlFor="radio3"
                className={` first-radio ticket-type ${formik.values.accessType === "vvip" ? "active" : ""}`}
              >
                <h2>$150</h2>

                <p className="access">VVIP ACCESS</p>
                <p className="num">20/52</p>
                <input
                  type="radio"
                  name="accessType"
                  id="radio3"
                  value="vvip"
                  className={` radio `}
                  checked={formik.values.accessType === "vvip"}
                  onChange={formik.handleChange}
                />
              </label>
            </div>
          </div>
          {/* number of ticket */}
          <div className="number-of-tickets">
            <p className="type">Number of tickets</p>
            <select
              onChange={formik.handleChange}
              defaultValue={formik.values.numOfTickets}
              name="numOfTickets"
              id=""
              className="select-options"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          {/* for-buttons */}
          <div className="btn-container">
          <button className="cancel">Cancel</button>
          <button className="submit-btn" type="submit">Submit</button>
            {/* <Button className="help" >Cancel</Button>
            <Button type="submit" contained>Next</Button> */}
          </div>
        </form>
      </main>
      </div>
    </>
  );
}

export default StepOne;
