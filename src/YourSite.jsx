import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, Navigate } from "react-router-dom";
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
          links.map((link) => (
            <tr>
              <td>{count}</td>

              <td>
                <Nav.Link href={link}>{link}</Nav.Link>
              </td>
              <td>
                <Nav.Link href={link+"/dashboard"}>{link+"/dashboard"}</Nav.Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
export default YourSite;
