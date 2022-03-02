import React from "react";
import "./survey.css";

function SurveyForm() {
  return (
    <div id="survey-form">
      <div id="wrapper">
        <div id="intro">
          <h1 id="title"> freeCodeCamp Survey</h1>
          <p>Thank you for taking the time to help us improve the platform</p>
        </div>
        <form action="" id="survey-form">
          <div className="form-group">
            <label id="name-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name and surname"
            />

            <label id="email-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter correct email"
            />

            <label id="number-label">Age</label>
            <input
              type="number"
              name="number"
              id="number"
              min="16"
              max="150"
              placeholder="Enter real age"
            />
          </div>
          <div className="form-group">
            <p>Which option best describes your current role?</p>
            <select id="dropdown">
              <option value="select-role">Select current role</option>
              <option value="student">Student</option>
              <option value="full-job">Full time job</option>
              <option value="full-learner">Full time learner</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <p>Would you recommend freeCodeCamp to a friend?</p>
            <div className="form-option">
              <input type="radio" name="001" id="Definitely" />
              <label htmlFor="Definitely">Definitely</label>
            </div>
            <div className="form-option">
              <input type="radio" name="001" id="Maybe" />
              <label htmlFor="Maybe">Maybe</label>
            </div>
            <div className="form-option">
              <input type="radio" name="001" id="Not sure" />
              <label htmlFor="Not sure">Not sure</label>
            </div>
          </div>
          <div className="form-group">
            <p>What is your favorite feature of freeCodeCamp?</p>
            <select id="dropdown">
              <option value="select-feature">Select feature</option>
              <option value="challenges">Challenges</option>
              <option value="projects">Projects</option>
              <option value="community">Community</option>
              <option value="open-source">Open Source</option>
            </select>
          </div>

          <div className="form-group">
            <p>
              What would you like to see improved?{" "}
              <span>(Check all that apply)</span>
            </p>
            <div className="form-option">
              <input type="checkbox" value="Front-end Projects" />
              <label htmlFor="Front-end Projects">Front-end Projects </label>
            </div>
            <div className="form-option">
              <input type="checkbox" value="Back-end Projects" />
              <label htmlFor="Back-end Projects">Back-end Projects </label>
            </div>
            <div className="form-option">
              <input type="checkbox" value="Data Visualization" />
              <label htmlFor="Data Visualization">Data Visualization </label>
            </div>
            <div className="form-option">
              <input type="checkbox" value="Challenges" />
              <label htmlFor="Challenges">Challenges </label>
            </div>
            <div className="form-option">
              <input type="checkbox" value="Open Source Communities" />
              <label htmlFor="Open Source Communities">
                Open Source Communities{" "}
              </label>
            </div>
          </div>
          <div className="form-group">
            <p>Any comments or suggestions?</p>
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="submit" id="form-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default SurveyForm;
