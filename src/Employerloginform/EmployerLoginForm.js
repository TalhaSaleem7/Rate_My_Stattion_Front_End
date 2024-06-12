import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




const EmployerLoginForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <div className="employer-login-form">
                <form action="">
                    <div className="employer-inputfield">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" placeholder='Type your usename here...' />
                    </div>
                    <div className="employer-inputfield">
                        <label htmlFor="password">Password</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                placeholder="Type your password here..."
                                style={{ paddingRight: '30px' }}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer'
                                }}
                            >
                                {passwordShown ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="employer-login-btns">
                        <a href="#" className='employerloginbtn'>Login</a>
                        <a href="#" className='employerforgotbtn'>Forgot password?</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmployerLoginForm