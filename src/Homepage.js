import React from "react";
import { useState } from "react";
import "./index.css";

const Homepage = () => {
  const [value, setvalue] = useState("");
  const [index, setindex] = useState();

  const handleChange = (e) => {
    setvalue(e.target.value);
    setindex(e.target.id);
  };

  const postData = async () => {
    const res = fetch(
      "https://react-storeindex-default-rtdb.firebaseio.com/useData.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          index,
          value,
        }),
      }
    );

    if (res) {
      alert("Details Submitted");
    } else {
      alert("Please fill the details");
    }
  };

  return (
    <>
      <div className="main">
        <div className="top">
          <button className="goal"> GOAL </button>
          <button className="activity"> ACTIVITY </button>
          <button className="profile"> PROFILE </button>
          <button className="coach"> SELECT COACH </button>
        </div>
        <div className="mid_container">
          <div className="left_container">
            <h2 className="heading"> Goal </h2>
            <p className="content">
              Select your Primary Goal. What do you want to accomplish in the
              next few months?
            </p>
          </div>
          <div className="right_container">
            <form>
              <div className="inner_container">
                <input
                  type="radio"
                  id="1"
                  name="radio"
                  value=" Get Leaner"
                  onChange={handleChange}
                />
                <span>Get Leaner</span>
              </div>
              <div className="inner_container">
                <input
                  type="radio"
                  id="2"
                  name="radio"
                  value="Get active again"
                  onChange={handleChange}
                />
                <span> Get active again</span>
              </div>

              <div className="inner_container">
                <input
                  type="radio"
                  id="3"
                  name="radio"
                  value=" Reduce Pain or injury"
                  onChange={handleChange}
                />
                <span> Reduce Pain or injury</span>
              </div>

              <div className="inner_container">
                <input
                  type="radio"
                  name="radio"
                  id="4"
                  value="Improve cardio or speed"
                  onChange={handleChange}
                />
                <span>Improve cardio or speed</span>
              </div>

              <div className="inner_container">
                <input
                  type="radio"
                  name="radio"
                  id="5"
                  value="Imrpove sports or performance"
                  onChange={handleChange}
                />
                <span>Improve sports or performance</span>
              </div>

              <br />
              <button type="submit" className="submit" onClick={postData}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
