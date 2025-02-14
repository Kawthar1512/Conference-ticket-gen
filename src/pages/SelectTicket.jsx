import { useState } from "react";
// import './stepOne.css'
import "../styles/SelectTicket.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useLocalStorage} from "./../hooks/useLocalStorage"
import { useNavigate } from "react-router";

function StepOne() {
  const [ticketInfo, setTicketInfo] = useLocalStorage("ticketInfo", {});
  const navigate = useNavigate()

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
      navigate("/upload")
    },
  });

  return (
    <>
      <main className="container">
        <header>
          <div className="header-text">
            <p className="ticket-selection-text">Ticket Selection</p>
            <p className="step1">Step 1/3</p>
          </div>
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        </header>

        <form onSubmit={formik.handleSubmit} className="second-container">
          {/* //first div */}
          <div className="event-details">
            <div className="techember-text">
              <h1>Techember Fest "25</h1>
              <div className="tech-paragraph">
                <p className="join-text">
                  Join us for an unforgettable experience at [Event Name]!
                  Secure your spot now.
                </p>
                <p>
                  📍[Event Location] &nbsp; || &nbsp; March 15, 2025 | 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="empty-progress-bar"></div>

          <div className="ticket-selection">
            <p>Select Ticket Type:</p>

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
            <p>Number of tickets</p>
            <select onChange={formik.handleChange} defaultValue={formik.values.numOfTickets} name="numOfTickets" id="" className="select-options">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          {/* for-buttons */}
          <div className="btn-container">
            <button className="cancel-btn">Cancel</button>
            <button type="submit" className="next-btn">Next</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default StepOne;
