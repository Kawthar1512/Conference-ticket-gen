import PageWrapper from "../components/PageWrapper";
import "./../styles/TicketBooked.css";
import Placeholder from "./../assets/placeholder1.png";
import Barcode from "react-barcode";
import Button from "../components/Button";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { useNavigate } from "react-router";

const TicketBooked = () => {
  const [ticketInfo, setTicketInfo] = useLocalStorage("ticketInfo");
  const [attendeeDetails, setAttendeeDetails] =
    useLocalStorage("attendeeDetails");
    const navigate = useNavigate()

  const handleBookAnotherTicket = () => {
    setTicketInfo(undefined);
    setAttendeeDetails(undefined);
    navigate(-2)
  };

  return (
    <PageWrapper id="ticket-booked" title="Ready" totalStep={3} currentStep={3}>
      <h2>Your Ticket is Booked!</h2>
      <h3>
        Check your email for a copy or you can <b>download</b>
      </h3>
      <section id="ticket-container">
        <section>
          <section className="header">
            <h3>Techember Fest ”25</h3>
            <h5>📍 04 Rumens road, Ikoyi, Lagos</h5>
            <h5>📅 March 15, 2025 | 7:00 PM</h5>
          </section>
          <section>
            <div>
              <img src={attendeeDetails?.imageUrl} />
              <div />
            </div>
          </section>
          <section>
            <section>
              <div>
                <h5>Enter your name</h5>
                <h4>{attendeeDetails?.name}</h4>
              </div>
              <div>
                <h5>Enter your email *</h5>
                <h4 style={{ overflowWrap: "anywhere" }}>
                  {attendeeDetails?.email}
                </h4>
              </div>
            </section>
            <section>
              <div>
                <h5>Ticket Type:</h5>
                <h4>{ticketInfo?.accessType.toUpperCase()}</h4>
              </div>
              <div>
                <h5>Ticket for :</h5>
                <h4>{ticketInfo?.numOfTickets}</h4>
              </div>
            </section>
            <section>
              <div>
                <h5>Special request?</h5>
                <h4>{attendeeDetails?.specialRequest}</h4>
              </div>
            </section>
          </section>
        </section>
        <section>
          <Barcode
            value="1   234567   891026"
            background="transparent"
            lineColor="#fff"
            height={62}
          />
        </section>
      </section>
      <footer>
        <Button onClick={handleBookAnotherTicket}>Book Another Ticket</Button>
        <Button contained onClick={() => window.print()}>Download Ticket</Button>
      </footer>
    </PageWrapper>
  );
};

export default TicketBooked;
