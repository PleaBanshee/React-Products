import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
    };
      
    const onSubmit = async (data) => {
        const { firstname, lastname, phone, email, subject, message } = data;

        try {
            const templateParams = {
                firstname,
                lastname,
                phone,
                email,
                subject,
                message
            };
            await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
            console.log(`Email sent!`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                Contact Us
            </h1>
            <div className="p-6  h-full">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                <label htmlFor="first-name" name="first-name" className='font-bold'>First name</label>
                <input 
                    type="text" 
                    id="first-name" 
                    name="first-name" 
                    className="form-input px-3 py-2 rounded-md border-4 border-blue-300 mb-2"
                    {...register('firstname', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                    })}
                    required 
                />
                {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
                <div className="flex flex-col">
                <label htmlFor="last-name" className='font-bold'>Last name</label>
                <input 
                    type="text" 
                    id="last-name" 
                    name="last-name" 
                    className="form-input px-3 py-2 rounded-md border-4 border-blue-300 mb-2"
                    {...register('lastname', {
                        required: { value: true, message: 'Please enter your surname' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                    })}
                    required 
                />
                {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                <div className="flex flex-col">
                <label htmlFor="email" className='font-bold'>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input px-3 py-2 rounded-md border-4 border-blue-300 mb-2" 
                    {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    required 
                />
                {errors.email && (<span>Please enter a valid email address</span>)}
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone">
                    <div className="flex align-items font-bold">
                    Phone
                    <span className="ml-auto opacity-75">Optional</span>
                    </div>
                </label>
                <input type="tel" id="phone" name="phone" className="form-input px-3 py-2 rounded-md border-4 border-blue-300" />
                </div>
                <div className="flex flex-col col-span-2">
                <label htmlFor="subject" className='font-bold'>Subject</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input px-3 py-2 rounded-md border-4 border-blue-300 mb-2" 
                    {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                    })}
                    required 
                />
                {errors.subject && (<span>{errors.subject.message}</span>)}
                </div>
                <div className="flex flex-col col-span-2">
                <label htmlFor="subject">
                    <div className="flex align-items font-bold">
                    Message
                    <span className="ml-auto opacity-75 font-bold">Max 500 characters</span>
                    </div>
                </label>
                <textarea 
                    maxLength="500" 
                    rows="4" 
                    type="text" 
                    id="message" 
                    name="message" 
                    className="form-input px-3 py-2 rounded-md border-4 border-blue-300  h-6/6 mb-2" 
                    {...register('message', {
                        required: true
                    })}
                    required 
                />
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
            </div>
            <div className="flex justify-end py-4 justify-center">
                <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
                Submit
                </button>
            </div>
            </form>
            <ToastContainer/> {/* Displays when form submitted successfully */}
        </div>
        </div>
    );
}

export default Contact;