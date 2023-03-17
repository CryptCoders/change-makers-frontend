import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import bgImg from "./images/bg_4.jpg";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ngotheme.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const NgoTheme = () => {
    const paramsName = useParams();

    //   const orgDetails = {
    //   name: "",
    //   description:
    //     "Educate. Motivate. Entertain. Content serves many purposes on a nonprofit website and can take many forms, from text and videos to interactive graphics. Get tips and inspiration for your organization with 21 examples of websites with amazing content.",
    //   imgLink: "",
    //   address: "1/12 Shri",
    //   socialfb: "",
    //   socialinsta: "",
    //   events: [],
    //   phone_no: "8779342314",
    // };
    // const [details,setdetails]=useState(orgDetails);
    const [email, setEmail] = useState("adityamane711@gmail.com");
    const [name, setName] = useState("Welfare");
    const [description, setDescription] = useState("Website");
    const [imgLink, setImgLink] = useState("");
    const [address, setAddress] = useState("Mulund");
    const [phoneNo, setPhoneNo] = useState("+91-8779342314");
    const [socialFb, setSocialFb] = useState();
    const [socialInsta, setSocialInsta] = useState();
    const [events,setEvents] = useState();

    const getDetails = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/v1/get/${paramsName.name}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    withCredentials: true,
                },
            }
        );
        const data = await response.json();
        console.log("data", data);
        //details=data.site;
        setName(data.site.name);
        setDescription(data.site.description);
        setImgLink(data.site.image);
        setAddress(data.site.address);
        setPhoneNo(data.site.phone_no);
        setEmail(data.email);
        setSocialFb(data.site.social_fb);
        setSocialInsta(data.site.social_insta);
        setEvents([...data.site.event]);
        console.log(data.site.event);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <div className="navbar-ngo">
                <h3>{name}</h3>
            </div>
            <div className="image">
                <img src={imgLink} alt="bg" />
            </div>
            <div className="description">
                {description}
                <div className="icons">
          <span className="volunteer-icon">
            <i className="fa-solid fa-handshake-angle"></i>
            <p>Volunteer</p>
          </span>
                    <span className="spreadlove-icon">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <p>Spread Love</p>
          </span>
                </div>
            </div>

            <hr></hr>
            <div className="events">
                <h4>Events</h4>

                <div className="events-list">
                    { events && events.map((event) =>
                    (
                        <Card style={{ width: "18rem" }} className="eventcard">
                            <Card.Img variant="top" src={event[0].image} />
                            <Card.Body>
                                <Card.Title>{event[0].name}</Card.Title>
                                <Card.Text>
                                    {event[0].description}
                                </Card.Text>
                                <Card.Text>{event[0].date}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }

                </div>
            </div>
            <hr></hr>
            <div className="volunteer_form">
                <h4>Become a Volunteer</h4>
                <div className="form">
                    <form action="">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group box-shadow">
              <textarea
                  className="textArea"
                  rows="4"
                  cols="30"
                  type="text"
                  name="message"
                  placeholder="Message"
              />
                        </div>
                        <div className="form-group">
                            <input value="Send Message" className="volunteerSubmit" />
                        </div>
                    </form>
                    <div className="details">
                        <div className="details-list">
                            <li>Contact No: {phoneNo}</li>
                            <li>Email: {email}</li>
                            <li>Address : {address}</li>

                            <li className="social-media">
                                <a href={socialInsta}>
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href={socialFb}>
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NgoTheme;
