import { Container, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://transcrew.herokuapp.com/newsletter", data)
      .then((result) => {
        if (result.data.insertedId) {
          alert("Message Send Successfully");
          reset();
        }
      });
  };
  return (
    <div
      className="bg-info py-5"
      style={{
        background: "#00b0ff",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "50px",
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="">
            <p style={{ width: "50%", marginTop: "20px", color: "#fff" }}>
              Essential service provider offering reliable courier service all
              over the world.Have it delivered to you on Pathao Parcel, without
              any hassle!
            </p>
            <div style={{ marginBottom: "10px" }}>
              <span style={{ marginRight: "10px" }}>
                <a
                  style={{ color: "#fff" }}
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span style={{ marginRight: "10px" }}>
                <a
                  style={{ color: "#fff" }}
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span style={{ marginRight: "10px" }}>
                <a
                  style={{ color: "#fff" }}
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span style={{ marginRight: "10px" }}>
                <a
                  style={{ color: "#fff" }}
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>
          <div style={{ color: "#fff" }}>
            <h3>Subscribe Newsletter</h3>
            <p className="py-3 w-75">
              By subscribing to our mailing list you will always be update with
              the latest news from us.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "75%" }}>
              <TextField
                {...register("name", { required: true })}
                className="form-control form-input"
                style={{ height: "50px" }}
                placeholder="Enter Email Address"
                type="email"
              />
              <TextField type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
