import React from "react";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Sign in to your account</h1>
        <label htmlFor="email">
          Mail Id :
          <input type="email" placeholder="Enter your email id" />
        </label>
        <label htmlFor="">
          Password :
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Login</button>
      </section>
    </main>
  );
};

export default HomePage;
