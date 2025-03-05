import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackSummary from "./components/FeedbackSummary";
import "./App.css";

function App() {
  // Log in example
  const [user, setUser] = useState({
    userId: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "customer",
  });

  // Sample services
  const [services, setServices] = useState([
    { serviceId: 101, serviceName: "Web Hosting", category: "Service" },
    { serviceId: 102, serviceName: "Laptop", category: "Product" },
    { serviceId: 103, serviceName: "Customer Support", category: "Support" },
    { serviceId: 104, serviceName: "Phone", category: "Product" },
    { serviceId: 105, serviceName: "Social Media Management", category: "Service" },
    { serviceId: 106, serviceName: "Audio Book", category: "Product" },
  ]);

  const [feedbackList, setFeedbackList] = useState([]);

  // Function to handle feedback submission
  const handleFeedbackSubmit = (feedback) => {
    const newFeedback = {
      ...feedback,
      userId: feedback.userId, 
      name: feedback.name,
      email: feedback.email,
    };
    
    setFeedbackList([newFeedback, ...feedbackList]);
  };
  
  return (
    <div className="container">
      <h1>Customer Feedback System</h1>
      <div className="feedback-container">
        <FeedbackForm user={user} services={services} onSubmitFeedback={handleFeedbackSubmit} />
        <FeedbackSummary feedbackList={feedbackList} services={services} />
      </div>
    </div>
  );
}

export default App;
