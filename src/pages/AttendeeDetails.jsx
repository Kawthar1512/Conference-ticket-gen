import { useState } from "react";
import "../styles/AttendeeDetails.css";
import icon from "../assets/download-icon.png";
import mail from "../assets/mail.png";
import FileUploader from "../components/FileUploader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import Button from "../components/Button";

function AttendeeDetails() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState();
  const [attendeeDetails, setAttendeeDetails] = useLocalStorage(
    "attendeeDetails",
    {}
  );

  const formik = useFormik({
    initialValues: {
      imageUrl: attendeeDetails?.imageUrl ?? "",
      name: attendeeDetails?.name ?? "",
      email: attendeeDetails?.email ?? "",
      specialRequest: attendeeDetails?.specialRequest ?? "",
    },
    validationSchema: Yup.object({
      imageUrl: Yup.string().url("invalid image url").required(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      specialRequest: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      setAttendeeDetails(values);
      navigate("/ticket");
    },
  });

  return (
    <>
      <main className="container">
        <header>
          <div className="header-text">
            <p className="attendee">Attendee Details</p>
            <p className="step2">Step 2/3</p>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: "60%" }}></div>
          </div>
        </header>

        <div className="second-container">
          {/* //first div for photo */}
          <form onSubmit={formik.handleSubmit}>
            <div className="upload-frame">
              <label className="upload-text">Upload Profile Photo</label>
              <div className="photocontainer">
                <FileUploader
                fileUrl={formik.values.imageUrl}
                  onUploadComplete={(url) =>
                    formik.setFieldValue("imageUrl", url)
                  }
                  className="drag-photo"
                />
              </div>
            </div>
            <div className="empty-progress-bar"></div>

            {/* fill the form here */}
            <label htmlFor="">Enter your name</label>
            <div className="details">
              <input
                type="text"
                name="name"
                id=""
                required
                className="email-input"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>

            {/* email input  */}
            <label htmlFor="">Enter your email*</label>
            <div className="details">
              <img src={mail} alt="" className="mail-png" />
              <input
                type="email"
                name="email"
                id=""
                required
                className="email-input"
                placeholder="hello@aviaoflagos.io"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>

            {/* special request  */}
            <label htmlFor="">Special request?</label>
            <textarea
              name="specialRequest"
              id=""
              value={formik.values.specialRequest}
              onChange={formik.handleChange}
              cols="3"
              placeholder="Text area"
            ></textarea>

            {/* for-buttons */}
            <div className="btn-container">
              <Button onClick={() => navigate(-1)}>Back</Button>
            <Button type="submit" contained>Get my Free Ticket</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default AttendeeDetails;
