// import axios from "axios";
// import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";
// import Buttonh from "./savecnclbtn_h";
// import { useState } from "react";
// import { Alert } from "react-bootstrap";
// import {baseurl} from '../../baseurl';
// const ProfileComponent = () => {


//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     workPlace: '',
//     jobTitle: '',
//     address: '',
//     image:'',
    
//   });
  
//   const [isOpen, setIsOpen] = useState(false);
//   const [imageurl, setImage] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };

//   const handleSelect = (value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       workPlace: value
//     }));
//     setIsOpen(false);
//   };
//   const getUserFromLocalStorage = () => {
//     const user = localStorage.getItem('userData');
//     return user ? JSON.parse(user) : null;
//   };

//   const handleCancel = () => {
//     // Add your cancel logic here
//     console.log('Form submission cancelled');
//   }

//   const handleCallbackResume=(e)=>{


//     setImage(e);
//     console.log(e,"Clod")

  

//     // const response = axios.post('signup', {
//     //   id:userId,
//     //   profile:e
      
//     // });
//     // console.log(response)    
//   }
//   const handleSaveClick = () => {
//     handleSubmit({ preventDefault: () => {} });
//     console.log('hello world');
//   };
//   // const handleSubmit = async (e) => {
//   //   console.log('hello');
//   //   e.preventDefault();
//   //   const { firstName, lastName, workPlace, jobTitle, address } = formData;

//   //   const storedUser = getUserFromLocalStorage();
//   //   console.log('Retrieved user from local storage:', storedUser);
//   //   const userId = storedUser.id;

//   //   try {
//   //     const response = await axios.get(`${baseurl}/createprofile`, {
        
//   //       firstName,
//   //       lastName,
//   //       workPlace,
//   //       jobTitle,
//   //       address,
//   //       image:imageurl,
//   //       userId
//   //     });
      
//   //     console.log('Form submitted successfully:', response.data);
//   //     setMessage(response.data.message)
//   //   } catch (error) {
//   //     setError(error)
//   //     console.error('Error submitting form:', error);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     console.log('hello');
//     e.preventDefault();
//     const { firstName, lastName, workPlace, jobTitle, address  } = formData;

//     const storedUser = getUserFromLocalStorage();
//     console.log('Retrieved user from local storage:', storedUser);
//     const userId = storedUser.id;

//     try {
//         const response = await axios.post(`${baseurl}/createprofile`, {
//             params: {
//                 firstName,
//                 lastName,
//                 workPlace,
//                 jobTitle,
//                 address,
//                 image: imageurl,
//                 userId
//             }
//         });
        
//         console.log('Form submitted successfully:', response.data);
//         setMessage(response.data.message);
//     } catch (error) {
//         // Extract and set the error message
//         setError(error.response ? error.response.data.message : error.message);
//         console.error('Error submitting form:', error);
//     }
// };
//   // return (
//   //   <>
//   //     <h1 className="account-setting-right-title">Profile</h1>
//   //     <div className="account--profile--img--h d-flex align-items-center">
//   //     {message && <Alert variant="success">{message}</Alert>}
//   //     {error && <Alert variant="danger">{error}</Alert>}
//   //       <div className="account--profile--img--h--cont">
//   //         {/* <img src={require("../../img/account_h.png")} alt="" /> */}

//   //         <CloudinaryUpload cloudName={handleCallbackResume}
//   //                                               number={"1"}/>
//   //       </div>
//   //       <a href="#" className="profile--image--a--h">
//   //         Upload Image in <span>jpg or png format</span>
//   //       </a>
//   //     </div>
//   //     <div className="col-12 mb-3 mt-1">
//   //       <label htmlFor="inputFirstName" className="form-label form-label-alt">
//   //         First name
//   //       </label>
//   //       <input
//   //         type="text"
//   //         className="form-control experience--address--inp--h"
//   //         id="firstName"
//   //         placeholder="Type here..."
//   //         value={formData.firstName}
//   //         onChange={handleChange}
//   //       />
//   //     </div>
//   //     <div className="col-12 mb-3 mt-1">
//   //       <label htmlFor="inputLastName" className="form-label form-label-alt">
//   //         Last name
//   //       </label>
//   //       <input
//   //         type="text"
//   //         className="form-control experience--address--inp--h"
//   //         id="lastName"
//   //         placeholder="Type here..."
//   //         value={formData.lastName}
//   //         onChange={handleChange}
//   //       />
//   //     </div>
//   //     {/* <div className="mb-3 mt-1 col-12 drop--position">
//   //       <label htmlFor="inputWorkPlace" className="form-label form-label-alt">
//   //         Work Place
//   //       </label>

//   //       <div
//   //         onClick={toggle}
//   //         className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
//   //           isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
//   //         }`}
//   //         id="inputWorkPlace"
//   //       >
//   //         Choose Option...
//   //       </div>
//   //       {isOpen && (
//   //         <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
//   //           <li onClick={toggle}>Option</li>

//   //           <li onClick={toggle}>Option</li>
//   //           <li onClick={toggle}>Option</li>
//   //         </ul>
//   //       )}
//   //     </div> */}
//   //      <div className="mb-3 mt-1 col-12 drop--position">
//   //       <label htmlFor="workPlace" className="form-label form-label-alt">
//   //         Work Place
//   //       </label>
//   //       <div
//   //         onClick={toggle}
//   //         className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
//   //           isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
//   //         }`}
//   //         id="workPlace"
//   //       >
//   //         {formData.workPlace || 'Choose Option...'}
//   //       </div>
//   //       {isOpen && (
//   //         <ul className="experience--job--inp--h experience--job--inp--h--dropdown">
//   //           <li onClick={() => handleSelect('Option 1')}>Option 1</li>
//   //           <li onClick={() => handleSelect('Option 2')}>Option 2</li>
//   //           <li onClick={() => handleSelect('Option 3')}>Option 3</li>
//   //         </ul>
//   //       )}
//   //     </div>
//   //     <div className="col-12 mb-3 mt-1">
//   //       <label htmlFor="inputJobTitle" className="form-label form-label-alt">
//   //         Job title
//   //       </label>
//   //       <input
//   //         type="text"
//   //         className="form-control experience--address--inp--h"
//   //         id="jobTitle"
//   //         placeholder="Type here..."
//   //         value={formData.jobTitle}
//   //         onChange={handleChange}
//   //       />
//   //     </div>
//   //     <div className="col-12 mb-3 mt-1">
//   //       <label htmlFor="inputAddress" className="form-label form-label-alt">
//   //         Your address
//   //       </label>
//   //       <input
//   //         type="text"
//   //         className="form-control experience--address--inp--h"
//   //         id="address"
//   //         placeholder="Type here..."
//   //         value={formData.address}
//   //         onChange={handleChange}
//   //       />
//   //     </div>
//   //     {/* <Buttonh onSave={handleSaveClick} onCancel={handleCancel} /> */}

//   //     <div className="experience--button--h pt-1">
//   //       <button 
//   //         type="button"
//   //         className="btn btn-primary experience--btn--h experience--btn--h--alt"
//   //         onClick={handleSaveClick}
//   //       >
//   //         Save
//   //       </button>
//   //       <button
//   //         type="button"
//   //         className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
//   //         onClick={handleCancel}
//   //       >
//   //         Cancel
//   //       </button>
//   //     </div>
      
//   //   </>
//   // );


//   return (
//     <>
//         <h1 className="account-setting-right-title">Profile</h1>
//         <div className="account--profile--img--h d-flex align-items-center">
//             {message && <Alert variant="success">{message}</Alert>}
//             {error && <Alert variant="danger">{error}</Alert>}
//             <div className="account--profile--img--h--cont">
//                 <CloudinaryUpload cloudName={handleCallbackResume} number={"1"} />
//             </div>
//             <a href="#" className="profile--image--a--h">
//                 Upload Image in <span>jpg or png format</span>
//             </a>
//         </div>
//         <div className="col-12 mb-3 mt-1">
//             <label htmlFor="inputFirstName" className="form-label form-label-alt">
//                 First name
//             </label>
//             <input
//                 type="text"
//                 className="form-control experience--address--inp--h"
//                 id="firstName"
//                 placeholder="Type here..."
//                 value={formData.firstName}
//                 onChange={handleChange}
//             />
//         </div>
//         <div className="col-12 mb-3 mt-1">
//             <label htmlFor="inputLastName" className="form-label form-label-alt">
//                 Last name
//             </label>
//             <input
//                 type="text"
//                 className="form-control experience--address--inp--h"
//                 id="lastName"
//                 placeholder="Type here..."
//                 value={formData.lastName}
//                 onChange={handleChange}
//             />
//         </div>
//         <div className="mb-3 mt-1 col-12 drop--position">
//             <label htmlFor="workPlace" className="form-label form-label-alt">
//                 Work Place
//             </label>
//             <div
//                 onClick={toggle}
//                 className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
//                     isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
//                 }`}
//                 id="workPlace"
//             >
//                 {formData.workPlace || 'Choose Option...'}
//             </div>
//             {isOpen && (
//                 <ul className="experience--job--inp--h experience--job--inp--h--dropdown">
//                     <li onClick={() => handleSelect('Option 1')}>Option 1</li>
//                     <li onClick={() => handleSelect('Option 2')}>Option 2</li>
//                     <li onClick={() => handleSelect('Option 3')}>Option 3</li>
//                 </ul>
//             )}
//         </div>
//         <div className="col-12 mb-3 mt-1">
//             <label htmlFor="inputJobTitle" className="form-label form-label-alt">
//                 Job title
//             </label>
//             <input
//                 type="text"
//                 className="form-control experience--address--inp--h"
//                 id="jobTitle"
//                 placeholder="Type here..."
//                 value={formData.jobTitle}
//                 onChange={handleChange}
//             />
//         </div>
//         <div className="col-12 mb-3 mt-1">
//             <label htmlFor="inputAddress" className="form-label form-label-alt">
//                 Your address
//             </label>
//             <input
//                 type="text"
//                 className="form-control experience--address--inp--h"
//                 id="address"
//                 placeholder="Type here..."
//                 value={formData.address}
//                 onChange={handleChange}
//             />
//         </div>
//         <div className="experience--button--h pt-1">
//             <button 
//                 type="button"
//                 className="btn btn-primary experience--btn--h experience--btn--h--alt"
//                 onClick={handleSaveClick}
//             >
//                 Save
//             </button>
//             <button
//                 type="button"
//                 className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
//                 onClick={handleCancel}
//             >
//                 Cancel
//             </button>
//         </div>
//     </>
// );

// };

// export default ProfileComponent;







import axios from "axios";
import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";
import Buttonh from "./savecnclbtn_h";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { baseurl } from '../../baseurl';

const ProfileComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        workPlace: '',
        jobTitle: '',
        address: '',
        image: '',
    });

    const [isOpen, setIsOpen] = useState(false);
    const [imageurl, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isImagedisplay, setImagedisplay ] = useState('');

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSelect = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            workPlace: value
        }));
        setIsOpen(false);
    };

    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
    };

    const handleCancel = () => {
        console.log('Form submission cancelled');
    }

    const handleCallbackResume = (e) => {
        setImage(e);
        setImagedisplay(e)
        console.log(e, "Clod");
    }

    const handleSaveClick = () => {
        handleSubmit({ preventDefault: () => {} });
        console.log('hello world');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, workPlace, jobTitle, address } = formData;

        const storedUser = getUserFromLocalStorage();
        const userId = storedUser ? storedUser.id : null;

        if (!userId) {
            setError('User ID is missing');
            return;
        }

        try {
            const response = await axios.post(`${baseurl}/createprofile`, {
                firstName,
                lastName,
                workPlace,
                jobTitle,
                address,
                image: imageurl,
                userId
            });

            console.log('Form submitted successfully:', response.data);
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <h1 className="account-setting-right-title">Profile</h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="account--profile--img--h d-flex align-items-center">
                <div className="account--profile--img--h--cont">
                    <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} />
                </div>
                <a href="#" className="profile--image--a--h">
                    Upload Image in <span>jpg or png format</span>
                </a>
            </div>
            <div className="col-12 mb-3 mt-1">
                <label htmlFor="firstName" className="form-label form-label-alt">
                    First name
                </label>
                <input
                    type="text"
                    className="form-control experience--address--inp--h"
                    id="firstName"
                    placeholder="Type here..."
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="col-12 mb-3 mt-1">
                <label htmlFor="lastName" className="form-label form-label-alt">
                    Last name
                </label>
                <input
                    type="text"
                    className="form-control experience--address--inp--h"
                    id="lastName"
                    placeholder="Type here..."
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3 mt-1 col-12 drop--position">
                <label htmlFor="workPlace" className="form-label form-label-alt">
                    Work Place
                </label>
                <div
                    onClick={toggle}
                    className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                        isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
                    }`}
                    id="workPlace"
                >
                    {formData.workPlace || 'Choose Option...'}
                </div>
                {isOpen && (
                    <ul className="experience--job--inp--h experience--job--inp--h--dropdown">
                        <li onClick={() => handleSelect('Option 1')}>Option 1</li>
                        <li onClick={() => handleSelect('Option 2')}>Option 2</li>
                        <li onClick={() => handleSelect('Option 3')}>Option 3</li>
                    </ul>
                )}
            </div>
            <div className="col-12 mb-3 mt-1">
                <label htmlFor="jobTitle" className="form-label form-label-alt">
                    Job title
                </label>
                <input
                    type="text"
                    className="form-control experience--address--inp--h"
                    id="jobTitle"
                    placeholder="Type here..."
                    value={formData.jobTitle}
                    onChange={handleChange}
                />
            </div>
            <div className="col-12 mb-3 mt-1">
                <label htmlFor="address" className="form-label form-label-alt">
                    Your address
                </label>
                <input
                    type="text"
                    className="form-control experience--address--inp--h"
                    id="address"
                    placeholder="Type here..."
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div className="experience--button--h pt-1">
                <button 
                    type="button"
                    className="btn btn-primary experience--btn--h experience--btn--h--alt"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </>
    );
};

export default ProfileComponent;
