import { useState } from "react";
 
const hobbies = [
  {
    value: "music",
    name: "Music",
  },
  {
    value: "movie",
    name: "Movies",
  },
  {
    value: "plastic-model",
    name: "Plastic Model",
  },
];
 
const genders = [
  {
    value: "male",
    name: "Male",
  },
  {
    value: "female",
    name: "Female",
  },
  {
    value: "others",
    name: "Others",
  },
];
const departments = {
  Accounting: [
    "Accountant",
    "Senior Accountant",
    "Payroll Officer",
  ],
  IT: [
    "Programmer",
    "System Analyst",
    "Project Manager",
  ],
  Marketing: [
    "Marketing Officer",
    "Sales Executive",
    "Brand Manager",
  ],
};
function UserRegistration() {
  const [department, setDepartment] = useState("Accounting");
  const [job, setJob] = useState("Accountant");
  const [username, setUsername] = useState("");
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
 
const [gender, setGender] = useState("");
const [selectedHobbies, setSelectedHobbies] = useState([]);
 
const [submitted, setSubmitted] = useState(false);
const handleSubmit = () => {
  setSubmitted(true);
};
 
const handleReset = () => {
  setUsername("");
  setFirstname("");
  setLastname("");
  setGender("");
  setSelectedHobbies([]);
  setDepartment("Accounting");
  setJob("Accountant");
  setSubmitted(false);
};
  return (
    <div>
      <div>User Registration</div>
      <hr />
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
  type="text"
  id="username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
        </div>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender-1">Gender</label>
         <div>
{genders.map((item) => (
  <label key={item.value}>
    <input
      type="radio"
      name="gender"
      value={item.value}
      checked={gender === item.value}
      onChange={(e) => setGender(e.target.value)}
    />
    {item.name}
  </label>
))}
</div>
        </div>
        <div>
          <label htmlFor="hobby-1">Hobbies</label>
          <div>
  {hobbies.map((hobby) => (
    <label key={hobby.value}>
      <input
        type="checkbox"
        value={hobby.value}
        checked={selectedHobbies.includes(hobby.value)}
        onChange={(e) => {
          if (e.target.checked) {
            setSelectedHobbies([...selectedHobbies, hobby.value]);
          } else {
            setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby.value));
          }
        }}
      />
      {hobby.name}
    </label>
  ))}
</div>
        </div>
        <div>
  <label htmlFor="department">Department</label>
 
  <select
    id="department"
    name="department"
    value={department}
    onChange={(event) => {
      const selectedDepartment = event.target.value;
 
      setDepartment(selectedDepartment);
      setJob(departments[selectedDepartment][0]);
    }}
  >
    {Object.keys(departments).map((departmentName) => (
      <option key={departmentName} value={departmentName}>
        {departmentName}
      </option>
    ))}
  </select>
</div>
 
<div>
  <label htmlFor="job">Job Position</label>
 
  <select
    id="job"
    name="job"
    value={job}
    onChange={(event) => setJob(event.target.value)}
  >
    {departments[department].map((jobName) => (
      <option key={jobName} value={jobName}>
        {jobName}
      </option>
    ))}
  </select>
</div>
      </div>
      <hr />
      <div>
        <button type="button" onClick={handleReset}>
  Reset
</button>
 
<button type="button" onClick={handleSubmit}>
  Submit
</button>
      </div>
      {submitted && (
  <div>
    <h3>Submitted Information</h3>
 
    <p>Username: {username || "-"}</p>
    <p>Firstname: {firstname || "-"}</p>
    <p>Lastname: {lastname || "-"}</p>
 
    <p>
      Gender:{" "}
      {genders.find((item) => item.value === gender)?.name || "-"}
    </p>
 
    <p>
      Hobbies:{" "}
      {selectedHobbies.length > 0
        ? selectedHobbies
            .map(
              (value) =>
                hobbies.find((hobby) => hobby.value === value)?.name
            )
            .join(", ")
        : "-"}
    </p>
 
    <p>Department: {department}</p>
    <p>Job Position: {job}</p>
  </div>
)}
    </div>
    
  );
}
 
export default UserRegistration;
 
 