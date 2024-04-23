import React from "react";
import Scrollspy from "react-scrollspy";
import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Portfolio() {
  return (
    <>
      <Card className="bg-dark text-white card-main p-4 mb-3">
        <div id="portfolio">
          <h1 className="green-text">Portfolio page</h1>
          <p className="green-text">Will put my work here soon...</p>
        </div>
      </Card>
    </>
  );
}
