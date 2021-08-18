import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="panel-container">
        <strong>
          How satisfied are you with our <br />
          customer support performance?
        </strong>
        <div className="ratings-container">
          <div className="rating">
            <img
              src="https://image.flaticon.com/icons/svg/187/187150.svg"
              alt="Unhappy"
            />
            <small>Unhappy</small>
          </div>
          <div className="rating">
            <img
              src="https://image.flaticon.com/icons/svg/187/187136.svg"
              alt="Neutral"
            />
            <small>Neutral</small>
          </div>

          <div className="rating">
            <img
              src="https://image.flaticon.com/icons/svg/187/187133.svg"
              alt="Satisfied"
            />
            <small>Satisfied</small>
          </div>
        </div>
        <button className="btn">Send Review</button>
      </div>
    </div>
  );
}

export default App;
