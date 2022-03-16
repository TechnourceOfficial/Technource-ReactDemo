import React from "react";
const Form = ({ sendDataToParent }) => {
  const [name, setName] = React.useState("");
  const [designation, setDesig] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [skills, setSkills] = React.useState([]);
  const [totalSkill, setInput] = React.useState(1);

  const formSubmit = (e) => {
    e.preventDefault();
    sendDataToParent(name, designation, email, phone, address, photo, skills);
  };

  const addSkill = (e) => {
    setInput(totalSkill + 1);
  };

  const removeSkill = (e) => {
    if (totalSkill > 1) {
      setInput(totalSkill - 1);
    }
  };

  const setField = (e, type, index) => {
    e.preventDefault();
    if (type == "name") {
      setName(e.target.value);
    } else if (type == "email") {
      setEmail(e.target.value);
    } else if (type == "address") {
      setAddress(e.target.value);
    } else if (type == "phone") {
      setPhone(e.target.value);
    } else if (type == "designation") {
      setDesig(e.target.value);
    } else if (type == "photo") {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (type == "skill") {
      let clonedSkills = [...skills];
      clonedSkills[index] = e.target.value;
      setSkills(clonedSkills);
    }
    // switch (type) {
    //   case "name":
    //      setName(e.target.value);
    //     break;
    //   case "email":
    //      setEmail(e.target.value);
    //     break;
    //   case "address":
    //      setAddress(e.target.value);
    //     break;
    //   case "phone":
    //      setPhone(e.target.value);
    //     break;
    //   case "designation":
    //      setDesig(e.target.value);
    //    break
    //   default:
    //     break;
  };

  return (
    <form
      onSubmit={(event) => {
        formSubmit(event);
      }}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="name"
          placeholder="Enter Name"
          onChange={(event) => {
            setField(event, "name");
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="email"
          placeholder="Enter email"
          onChange={(event) => {
            setField(event, "email");
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Phone</label>
        <input
          type="phone"
          className="form-control"
          id="phone"
          aria-describedby="phone"
          placeholder="Enter phone"
          onChange={(event) => {
            setField(event, "phone");
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="address"
          className="form-control"
          id="address"
          aria-describedby="address"
          placeholder="Enter address"
          onChange={(event) => {
            setField(event, "address");
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input
          type="designation"
          className="form-control mb-3"
          id="designation"
          aria-describedby="designation"
          placeholder="Enter designation"
          onChange={(event) => {
            setField(event, "designation");
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="designation">Photo</label>
        <input
          type="file"
          className="form-control mb-3"
          id="photo"
          aria-describedby="photo"
          onChange={(event) => {
            setField(event, "photo");
          }}
        />
      </div>

      {[...Array(totalSkill)].map((e, i) => (
        <div key={i}>
          <div className="form-group">
            <label htmlFor="designation">Skill {i + 1}</label>
            <input
              type="text"
              className="form-control mb-3"
              id={"skill" + i}
              aria-describedby="skill"
              onChange={(event) => {
                setField(event, "skill", i);
              }}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => addSkill()}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm mx-2"
        onClick={() => removeSkill()}
      >
        Remove
      </button>
      <br />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
