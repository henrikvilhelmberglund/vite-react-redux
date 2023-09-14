export default function Activity({ activity, type, participants, price }) {
  // {"activity":"Go to a music festival with some friends","type":"social","participants":4,"price":0.4,"link":"","key":"6482790","accessibility":0.2}
  function mapRange(value, fromMin, fromMax, toMin, toMax) {
    // Ensure the value is within the from range
    value = Math.min(Math.max(value, fromMin), fromMax);

    // Calculate the normalized value (between 0 and 1) in the from range
    const normalizedValue = (value - fromMin) / (fromMax - fromMin);

    // Map the normalized value to the to range
    const mappedValue = normalizedValue * (toMax - toMin) + toMin;

    return mappedValue;
  }

  // Example usage:
  const result = mapRange(0.5, 0, 1, 0, 185);
  // console.log(result); // Output: 92.5

  return activity ? (
    <article className="bg-green-100 p-4 rounded-md">
      <h2>{activity}</h2>
      <p>Type: {type}</p>
      <p>
        {participants} {participants === 1 ? "participant" : "participants"}
      </p>
      <p>{mapRange(price, 0, 1, 0, 350)}$</p>
    </article>
  ) : (
    <h2>No activity was found. Try again!</h2>
  );
}
