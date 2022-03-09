import React from "react";

class App extends React.Component {

	state = {
		count: 0,
	}
	addDeleResetOne = (number) => {
		this.setState({count: number})
	}
  render() {
        return (
          <div className="container mt-3">
            <div className="row">
              <div className="col-sm-12 text-center">
                <div className="card">
                  <div className="card-header bg-dark p-5">
                    <h1 className="text-light">AddNumber Counter 👀</h1>
                  </div>
                  <div className="card-body bg-success">
                    <button className="btn btn-dark p-5 w-50">
                      {this.state.count}💲
                    </button>
                  </div>
                  <div className="card-footer bg-dark p-3">
                    <button
                      className="btn btn-success w-25"
                      onClick={() => this.addDeleResetOne(this.state.count + 1)}
                    >
                      Add + 1
                    </button>
                    <button
                      className="btn btn-primary w-25 m-5"
                      onClick={() => this.addDeleResetOne(0)}
                    >
                      Reset
                    </button>
                    <button
                      className="btn btn-danger w-25"
                      onClick={() => this.addDeleResetOne(this.state.count - 1)}>
                      Delete
                    </button>
                    <h3 className="text-light p-3 mt-4">
                      CLASS REACT-COMPONENT
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default App