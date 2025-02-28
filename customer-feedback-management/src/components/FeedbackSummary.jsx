import "./FeedbackSummary.css";

function FeedbackSummary({ feedbackList, services }) {
  const totalFeedback = feedbackList.length;

  // Calculate average rating per service
  const serviceRatings = {};
  services.forEach((service) => {
    const serviceFeedback = feedbackList.filter((fb) => fb.serviceId === service.serviceId);
    const avgRating =
      serviceFeedback.length > 0 ? (serviceFeedback.reduce((acc, fb) => acc + fb.rating, 0) / serviceFeedback.length).toFixed(1) : "N/A";
    serviceRatings[service.serviceId] = avgRating;
  });

  return (
    <div className="feedback-summary">
      <h2>📊 Feedback Summary</h2>
      <div className="summary-box">
        <span>⭐ Total Feedback: {totalFeedback}</span>
      </div>

      <h3>Average Ratings per Service</h3>
      <ul>
        {services.map((service) => (
          <li key={service.serviceId}>
            {service.serviceName}: ⭐ {serviceRatings[service.serviceId]}
          </li>
        ))}
      </ul>

      <h3>Recent Feedback</h3>
      <div className="feedback-list">
        {feedbackList.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbackList.map((fb, index) => (
            <div key={index} className="feedback-item">
              <p>
                <strong>User {fb.userId}</strong> - Service {fb.serviceId}
              </p>
              <p>⭐ {fb.rating} stars</p>
              <p>📅 {new Date(fb.submittedAt).toLocaleString()}</p>
              <p>💬 {fb.comments}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeedbackSummary;
