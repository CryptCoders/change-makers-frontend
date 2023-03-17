import {useEffect, useState} from "react";
import "./dashboard.css";
import {useNavigate, useParams} from "react-router-dom";

const Dashboard = () =>
{
    const [editMode, setEditMode] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [savingForm, setSavingForm] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [socialFb, setSocialFb] = useState();
    const [socialInsta, setSocialInsta] = useState();
    const [eventName, setEventName] = useState();
    const [eventDescription, setEventDescription] = useState();
    const [eventDate, setEventDate] = useState();
    const [eventImage, setEventImage] = useState();
    const paramsName = useParams();
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        description: "",
        image: "",
        address: "",
        phone: "",
        social_fb: "",
        social_insta: "",
    };
    const [formValues, setFormValues] = useState(initialValues);

    useEffect(() =>
    {
        const getDetails = async () =>
        {
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
            console.log("data", data.site);
            //details=data.site;
            setName(data.site.name);
            setDescription(data.site.description);
            setAddress(data.site.address);
            setPhoneNo(data.site.phone_no);
            setSocialFb(data.site.social_fb);
            setSocialInsta(data.site.social_insta);
        };
        getDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(eventImage, paramsName);

        const response = await fetch(`http://127.0.0.1:8000/api/v1/event/create/${paramsName.name}`, {
            method: "POST",
            headers: {
                "authorization": localStorage.getItem("token"),
                "Content-Type": "application/json",
                "Accept": "application/json",
                "withCredentials": true
            },
            body: JSON.stringify({
                name: eventName,
                description: eventDescription,
                image: eventImage,
                date: eventDate
            })
        });
    }

    const updateDetails = async () =>
    {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/${paramsName.name}`, {
            method: "PUT",
            headers: {
                "authorization": localStorage.getItem("token"),
                "Content-Type": "application/json",
                "Accept": "application/json",
                "withCredentials": true
            },
            body: JSON.stringify({
                description: description,
                address: address,
                phone_no: phoneNo,
                image: image,
                social_fb: socialFb,
                social_insta: socialInsta,
            })
        });

        const data = response.json();
    }

    const handleImageChange = async (e) =>
    {
        const {name, files} = e.target;
        // setFormValues({...formValues , [name]:files[0]});
        const file = files[0];
        const base64 = await convertBase64(file);
        // isSubmit && setFormErrors(validate(formValues));
        console.log(base64);
        console.log(file);
        // setFormValues({...formValues, ["image"]: base64});
        setImage(base64);
    };

    const handleEventImageChange = async (e) =>
    {
        const {name, files} = e.target;
        // setFormValues({...formValues , [name]:files[0]});
        const file = files[0];
        const base64 = await convertBase64(file);
        // isSubmit && setFormErrors(validate(formValues));
        console.log(base64);
        console.log(file);
        // setFormValues({...formValues, ["image"]: base64});
        setEventImage(base64);
    };

    const convertBase64 = (file) =>
    {
        return new Promise((resolve, reject) =>
        {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () =>
            {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) =>
            {
                reject(error);
            };
        });
    }

        return (
            <>
                <div className="settings">
                    <div className="imgContainer">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="field">
                        <div className="fieldName">Name</div>
                        {editMode ? <p>{name}</p> : <div className="fieldValue">{name}</div>}
                    </div>

                    {editMode && (
                        <>
                            <div className="field">
                                <div className="fieldName">Description</div>
                                <input autoComplete="on" type="text" value={description}
                                       onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div className="field">
                                <div className="fieldName">Address</div>
                                <input autoComplete="on" type="text" value={address}
                                       onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="field">
                                <div className="fieldName">Phone No</div>
                                <input autoComplete="on" type="text" value={phoneNo}
                                       onChange={(e) => setPhoneNo(e.target.value)}/>
                            </div>
                            <div className="field">
                                <div className="fieldName">Facebook Link</div>
                                <input autoComplete="on" type="text" value={socialFb}
                                       onChange={(e) => setSocialFb(e.target.value)}/>
                            </div>
                            <div className="field">
                                <div className="fieldName">Instagram Link</div>
                                <input autoComplete="on" type="text" value={socialInsta}
                                       onChange={(e) => setSocialInsta(e.target.value)}/>
                            </div>
                            <div className="field">
                                <div className="fieldName">Upload Image</div>
                                <input autoComplete="on" type="file" onChange={handleImageChange}/>
                            </div>
                        </>
                    )}
                    <div className="btnGrp">
                        {editMode ? (
                            <>
                                <button
                                    className="button saveBtn"
                                    onClick={updateDetails}
                                    disabled={savingForm}
                                >
                                    {savingForm ? "Saving Form.." : "Save"}
                                </button>
                                <button
                                    className="button goBackBtn"
                                    onClick={() => setEditMode(false)}
                                >
                                    Back
                                </button>
                            </>
                        ) : (
                            <button
                                className="button editBtn"
                                onClick={() => setEditMode(true)}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
                <div className="addevent">
                    <h3>Add Event</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="eventinput">
                            <input
                                type="text"
                                className="eventinputfield"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="eventinputfield"
                                placeholder="Event Description"
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                            />
                            <input
                                type="file"
                                className="eventinputfield"
                                onChange={handleEventImageChange}
                            />
                            <input
                                type="date"
                                className="eventinputfield"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                            />
                            <input type="submit" className="button editBtn" value="Submit"/>
                        </div>
                    </form>
                </div>
            </>
        );
    };

export default Dashboard;
