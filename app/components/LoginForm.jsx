import React, { Component } from 'react';

export class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-wrapper'>
                        <div className='label'>Email or username</div>
                        <input type="text"  />
                    </div>
                    <div className='input-wrapper'>
                        <div className='label'>Password</div>
                        <input type="password"  />
                    </div>
                    <div className='forgot-pwd'>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <div className='remember'>
                        <input type="checkbox" name="remember" value="1" /> Remember me
                    </div>
                    <div className='btn-wrapper'>
                        <button >login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm; 