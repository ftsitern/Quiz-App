import React from "react";

export default function Options({ q, responses, index, qIndex }) {
  const handleResponse = () => {
    responses.push(q);
    qIndex.push(index);
    console.log(responses);
    localStorage.setItem("key", responses);
  };

  return (
    <div>
      <div class="input-group mb-3" style={{ width: "80%", margin: "auto" }}>
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              id={index}
              type="radio"
              name="correctAnswer"
              onClick={handleResponse}
            />
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with checkbox"
          value={q}
          readOnly
        />
      </div>
    </div>
  );
}
