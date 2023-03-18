import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
const YourSite = () => {
  const [links, setLinks] = useState([]);
  const [count, setCount] = useState(0);
  const getList = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/user/get/all", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
        withCredentials: true,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();

    setLinks([...data.links]);
    console.log("data", links);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
      <>
        <Navbar/>
      <h2 style={{"text-align": "center", "padding-top": "4rem", "padding-bottom": "1.5rem"}}>Your sites</h2>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Site Link</th>
          <th>Dashboard Link</th>
        </tr>
      </thead>
      <tbody>
        {links &&
          links.map((link, key) => (
            <tr>
              <td>{key + 1}</td>

              <td>
                <Nav.Link href={link}>{link}</Nav.Link>
              </td>
              <td>
                <Nav.Link href={link.substring(0, link.lastIndexOf('/')) + "/dashboard" + link.substring(link.lastIndexOf('/'))}>{link.substring(0, link.lastIndexOf('/')) + "/dashboard" + link.substring(link.lastIndexOf('/'))}</Nav.Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
        </>
  );
};
export default YourSite;
