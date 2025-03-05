import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm({ user, services, onSubmitFeedback }) {
  const [name, setName] = useState(user.name || ""); // Default to user name if available
  const [email, setEmail] = useState(user.email || ""); 
  const [rating, setRating] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !rating || !selectedService || !comments) {
      alert("Please fill in all fields.");
      return;
    }

    const newFeedback = {
      name,
      email,
      rating,
      serviceId: selectedService,
      userId: user.userId, 
      submittedAt: new Date().toISOString(),
      comments,
    };

    onSubmitFeedback(newFeedback);

    // Reset form fields after submission
    setName("");
    setEmail("");
    setRating(0);
    setSelectedService("");
    setComments("");
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>📝 Submit Your Feedback</h2>

      {/* Name Field - Only accepts letters and spaces */}
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
        pattern="[A-Za-z\s]+"
        title="Name should only contain letters and spaces"
      />

      {/* Email Field - Email validation */}
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      {/* Service/Product Selection */}
      <label>Service/Product:</label>
      <select
        value={selectedService}
        onChange={(e) => setSelectedService(parseInt(e.target.value))}
        required
      >
        <option value="">Select a service</option>
        {services.map((service) => (
          <option key={service.serviceId} value={service.serviceId}>
            {service.serviceName} ({service.category})
          </option>
        ))}
      </select>

      {/* Rating Section */}
      <label>Rating:</label>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star selected" : "star"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comments Section */}
      <label>Comments:</label>
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Enter your feedback here"
        required
      />

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;