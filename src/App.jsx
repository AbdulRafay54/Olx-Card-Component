import React from "react";
import OlxCard from "./components/Card";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="mt-4 text-center text-5xl">Olx Card Component</h1>
      <br />
      <br />

      <div className="flex justify-center flex-wrap gap-6">
        <OlxCard
          image="https://images.unsplash.com/photo-1616410072514-e92114cf1a88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D"
          title="iPhone 12 for Sale"
          price="PKR 120,000"
          location="Karachi, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
          title="Honda Civic 2018"
          price="PKR 2,500,000"
          location="Lahore, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1706989239865-25552e6f2c9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbXN1bmclMjBnYWxheHklMjBzMjMlMjB1bHRyYXxlbnwwfHwwfHx8MA%3D%3D"
          title="Samsung Galaxy S21"
          price="PKR 150,000"
          location="Islamabad, Pakistan"
        />
        <OlxCard
          image="https://media.istockphoto.com/id/604368604/photo/hell-on-two-wheels.webp?a=1&b=1&s=612x612&w=0&k=20&c=H7zwAsPrZYtDehrxSYltJnu8AxhdfRqD7lpe4gqKTCo="
          title="Yamaha Bike"
          price="PKR 100,000"
          location="Peshawar, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D"
          title="MacBook Pro 2021"
          price="PKR 300,000"
          location="Quetta, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1469032923574-4f1413034019?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          title="PlayStation 5"
          price="PKR 80,000"
          location="Multan, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1722503585127-f850a5cc7da5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Iphone 15 pro max"
          price="PKR 5 Lac"
          location="Multan, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
          title="Watch"
          price="PKR 80,000"
          location="Multan, Pakistan"
        />
        <OlxCard
          image="https://images.unsplash.com/photo-1616410072514-e92114cf1a88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D"
          title="Iphone 12"
          price="PKR 80,000"
          location="Multan, Pakistan"
        />
      </div>
    </>
  );
};

export default App;
