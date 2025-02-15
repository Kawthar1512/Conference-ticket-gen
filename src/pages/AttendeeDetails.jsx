import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import FileUploader from "../components/FileUploader";
import "../styles/AttendeeDetails.css";

function AttendeeDetails() {
  const navigate = useNavigate();
  const [attendeeDetails, setAttendeeDetails] = useLocalStorage("attendeeDetails", {});

  const formik = useFormik({
    initialValues: {
      imageUrl: attendeeDetails?.imageUrl ?? "",
      name: attendeeDetails?.name ?? "",
      email: attendeeDetails?.email ?? "",
      specialRequest: attendeeDetails?.specialRequest ?? "",
    },
    validationSchema: Yup.object({
      imageUrl: Yup.string().url("Invalid image URL").required(),
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required(),
      specialRequest: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      setAttendeeDetails(values);
      navigate("/ticket");
    },
  });

  // 🔹 Automatically update localStorage whenever form values change
  useEffect(() => {
    setAttendeeDetails(formik.values);
  }, [formik.values, setAttendeeDetails]);

  return (
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
        <form onSubmit={formik.handleSubmit}>
          <div className="upload-frame">
            <label className="upload-text">Upload Profile Photo</label>
            <div className="photocontainer">
              <FileUploader
                fileUrl={formik.values.imageUrl}
                onUploadComplete={(url) => formik.setFieldValue("imageUrl", url)}
                className="drag-photo"
              />
            </div>
          </div>

          <label>Enter your name</label>
          <div className="details">
            <input
              type="text"
              name="name"
              className="email-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </div>

          <label>Enter your email*</label>
          <div className="details">
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="hello@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
          </div>

          <label>Special request?</label>
          <textarea
            name="specialRequest"
            value={formik.values.specialRequest}
            onChange={formik.handleChange}
            cols="3"
            placeholder="Type here..."
          ></textarea>

          <div className="btn-container">
            <Button onClick={() => navigate(-1)}>Back</Button>
            <Button type="submit" contained>Get my Free Ticket</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AttendeeDetails;
