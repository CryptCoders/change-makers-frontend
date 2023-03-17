import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../css/Form.css";
import Navbarw from "./Navbar";
import {useNavigation} from "react-router-dom";
const Form = () =>
{
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
    const navigate=useNavigate();
    // const [image, setImage] = useState("");
    const handleSubmit = async (event) =>
    {
        console.log("formValues", formValues);
        event.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/v1/create", {
            method: "POST",
            headers: {
                authorization: localStorage.getItem("token"),
                withCredentials: true,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: formValues.name,
                description: formValues.description,
                image: formValues.image,
                address: formValues.address,
                phone_no: formValues.phone,
                social_fb: formValues.social_fb,
                social_insta: formValues.social_insta,
            }),
        });
        const data = response.json();
        console.log("response data", data);
        return navigate(`/yoursite`);
    };

    // const [logginngIn, setLogginIn] = useState("true");
    const handleChange = async (e) =>
    {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        // isSubmit && setFormErrors(validate(formValues));
        console.log(formValues);
    };

    const handleImageChange = async (e) =>
    {
        const {name, files} = e.target;
        // setFormValues({...formValues , [name]:files[0]});
        const file = files[0];
        const base64 = await convertBase64(file);
        // isSubmit && setFormErrors(validate(formValues));
        console.log(base64);
        console.log(file);
        setFormValues({...formValues, ["image"]: base64});
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
    };

    return (
        <>
            {/* <Navbarw/> */}
            <div className="form-create">
                <h1>Enter Site Details</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="login__group">
                        <input
                            className="textbox textbox__username"
                            id="name"
                            type="text"
                            placeholder="NGO Name"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="name">
                            NGO Name
                        </label>
                    </div>

                    <div className="login__group">
            <textarea
                className="textbox textbox__username"
                id="description"
                type="text"
                placeholder="NGO Description"
                name="description"
                value={formValues.handleSubmit}
                onChange={handleChange}
            />
                        <label className="label" htmlFor="description">
                            NGO Description
                        </label>
                    </div>

                    <div className="login__group">
                        <input
                            className="textbox textbox__username"
                            id="address"
                            type="text"
                            placeholder="NGO Address"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="address">
                            NGO Address
                        </label>
                    </div>

                    <div className="login__group">
                        <input
                            className="textbox textbox__password"
                            id="phone"
                            type="text"
                            placeholder="Phone No."
                            value={formValues.phone}
                            name="phone"
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="phone">
                            Phone No.
                        </label>
                    </div>

                    <div className="login__group">
                        <input
                            className="textbox textbox__password"
                            id="social_fb"
                            type="text"
                            placeholder="Facebook Link"
                            // value={formValues.socialfb}
                            name="social_fb"
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="social_fb">
                            Facebook Link
                        </label>
                    </div>
                    <div className="login__group">
                        <input
                            className="textbox textbox__password"
                            id="social_insta"
                            type="text"
                            placeholder="Instagram Link"
                            // value={formValues.socialinsta}
                            name="social_insta"
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="social_insta">
                            Instagram Link
                        </label>
                    </div>

                    <div className="login__group">
                        <input
                            className="textbox textbox__username"
                            id="image"
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                        />
                        <label className="label" htmlFor="image">
                            NGO Image
                        </label>
                    </div>

                    <div className="login__group">
                        <input className="btn box-shadow" type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        </>
    );
};

// useEffect(()=>{
//   console.log(formErrors);
//   if(Object.keys(formErrors).length===0 && isSubmit){
//     console.log(formValues);

//   },[formErrors])

export default Form;
