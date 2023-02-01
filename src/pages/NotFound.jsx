import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex h-screen w-full items-center justify-center transition-all duration-400 dark:bg-gray-900">
      <div className="container text-center">
        <h1 className="section-title">404 Not Found</h1>
        <p className="section-text pb-8">
          The page you're looking for was not found. <br />
          Please check the URL again.
        </p>
        <Link to="/" className="button inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  );
}
