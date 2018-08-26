import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
        <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card-group">
              <div class="card p-4">
                <div class="card-body">
                  <form>
                    <h1>Login (to be implemented)</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="icon-user"></i></span>
                      </div>
                      <input type="text" class="form-control" placeholder="Username" autocomplete="username" required/>
                    </div>
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="icon-lock"></i></span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password" autocomplete="current-password" required/>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <button type="button" class="btn btn-primary px-4">Login</button>
                      </div>
                      <div class="col-6 text-right">
                        <button type="button" class="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;