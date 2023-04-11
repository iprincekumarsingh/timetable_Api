import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TeacherTimeTable() {
  const [options, setOptions] = useState([]);
  const [user, setUser] = useState("");
  const [day, setDay] = useState("");
  const [period, setPeriod] = useState("");
  const [classs, setClasss] = useState("");
  const [sec, setSec] = useState("");
  const [subject, setSubject] = useState("");

  const CREATE_TIME_API_ROUTE = "timetable/create";

  useEffect(() => {
    axios
      .get("timetable/teacher", {
        headers: {
          Authorization: "Bearer " + Cookies.get("access_token"),
        },
      })
      .then((response) => {
        // console.log(response.data.user);
        setOptions(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // now i want to show all teacher name in select option

  const DataTable = options.map((option) => {
    return (
      <option key={option._id} value={option._id}>
        {option.name}
      </option>
    );
  });

  // submit form

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: user,
      day: day,
      period: period,
      classs: classs,
      sec: sec,
      subject: subject,
      time: "10:00-11:00",
    };

    axios
      .post(CREATE_TIME_API_ROUTE, data, {
        headers: {
          content: "application/json",
          Authorization: "Bearer " + Cookies.get("access_token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "success") {
          toast("TimeTable Created Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          toast(error.response.data.message);
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl p-3 text-black">Assign Teacher TimeTable</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="p-6"
      >
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Select Teacher</label>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setUser(e.target.value);
            }}
            name="teacher"
            id="teacher"
          >
            <option value="Select Teacher">Select Teacher</option>

            {DataTable}
          </select>
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Select Day</label>
          <select
            onChange={(e) => {
              // console.log(e.target.value)
              setDay(e.target.value);
            }}
            name="teacher"
            id="teacher"
          >
            <option value="1">Select day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Select Period</label>
          <select
            onChange={(e) => {
              // console.log(e.target.value)
              setPeriod(e.target.value);
            }}
            name="teacher"
            id="teacher"
          >
            <option value="1">Select Period</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Enter class</label>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              setClasss(e.target.value);
            }}
            type="text"
            placeholder="eg : 1"
          />
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Enter Section</label>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              setSec(e.target.value);
            }}
            type="text"
            placeholder="eg :A"
          />
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="teacher">Subject Name</label>
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              setSubject(e.target.value);
            }}
            type="text"
            placeholder="eg :Biology"
          />
        </div>

        <button className="bg-blue-500 p-3 text-white rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
