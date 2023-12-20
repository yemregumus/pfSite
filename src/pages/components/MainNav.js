import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "/src/img/logo3.svg";

export default function MainNav() {
  const router = useRouter();
  return (
    <>
      <Navbar fixed="top" expand="lg" className="fixed-top bg-dark navbar-dark">
        <Container>
          <Navbar.Brand className="ml-auto">
            <Link href="/">
              <Image alt="" src={logo} width="200" height="50" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link active={router.pathname === "/"}>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link active={router.pathname === "/about"}>About</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link active={router.pathname === "/contact"}>Contact</Nav.Link>
            </Link>
            <Link href="/portfolio" passHref legacyBehavior>
              <Nav.Link active={router.pathname === "/portfolio"}>Portfolio</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
