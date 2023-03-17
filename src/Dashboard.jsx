import { useState } from "react";
import { toast } from "react-toastify";
import "./dashboard.css";
const Dashboard = () => {
  const [editMode, setEditMode] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingForm, setSavingForm] = useState(false);

  const clearForm = () => {
    setPassword("");
    setConfirmPassword("");
  };
  const updateProfile = async () => {
    setSavingForm(true);
    let error = false;

    if (password != confirmPassword) {
      toast.error("Password and Confirm password dont match", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
      });
      error = true;
    }
    if (error) {
      return setSavingForm(false);
    }
  };
  return (
    <>
      <div className="settings">
        <div className="imgContainer">
          <h2>Dashboard</h2>
        </div>
        <div className="field">
          <div className="fieldName">Name</div>
          {editMode ? <p>Name</p> : <div className="fieldValue">name</div>}
        </div>

        {editMode && (
          <>
            <div className="field">
              <div className="fieldName">Description</div>
              <input autoComplete="on" type="text" />
            </div>
            <div className="field">
              <div className="fieldName">Address</div>
              <input autoComplete="on" type="text" />
            </div>
            <div className="field">
              <div className="fieldName">Phone No</div>
              <input autoComplete="on" type="text" />
            </div>
            <div className="field">
              <div className="fieldName">Faceook Link</div>
              <input autoComplete="on" type="text" />
            </div>
            <div className="field">
              <div className="fieldName">Instagram Link</div>
              <input autoComplete="on" type="text" />
            </div>
            <div className="field">
              <div className="fieldName">Upload Image</div>
              <input autoComplete="on" type="file" />
            </div>
          </>
        )}
        <div className="btnGrp">
          {editMode ? (
            <>
              <button
                className="button saveBtn"
                onClick={updateProfile}
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
        <form action="">
          <div className="eventinput">
            <input
              type="text"
              className="eventinputfield"
              placeholder="Event Name"
            />
            <input
              type="text"
              className="eventinputfield"
              placeholder="Event Description"
            />
            <input type="file" className="eventinputfield" />
            <input type="date" className="eventinputfield" />
            <input type="submit" className="saveBtn" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Dashboard;
