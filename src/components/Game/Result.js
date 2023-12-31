import React from 'react'

const Result = ({alert, count, answer}) => {
  return (
    <div>
        {alert == 1 ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {" "}
            <strong>{count} guesses</strong>.
          </p>
        </div>
      ) : alert == -1 ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}</div>
  )
}

export default Result