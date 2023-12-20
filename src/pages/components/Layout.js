import React from "react";
import { Container } from "react-bootstrap";
import MainNav from "@/pages/components/MainNav";
import About from "../about";

export default function Layout(props) {
  return (
    <>
      <MainNav />

      <br />
      <br />
      <Container>{props.children}</Container>

      <br />
    </>
  );
}
