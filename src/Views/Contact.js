import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const onSubmit = async (data) => {
        const { firstname, lastname, email, phone, subject, message } = data;
        
        console.log('First Name: ', firstname);
        console.log('Last Name: ', lastname);
        console.log('Email: ', email);
        console.log('Phone: ', phone);
        console.log('Subject: ', subject);
        console.log('Message: ', message);
      };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                Contact Us
            </h1>
            <div className="p-6  h-full">
            <form>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                <label htmlFor="first-name" className='font-bold'>First name</label>
                <input type="text" id="first-name" name="first-name" className="form-input px-3 py-2 rounded-md border-4 border-blue-300" required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="last-name" className='font-bold'>Last name</label>
                <input type="text" id="last-name" name="last-name" className="form-input px-3 py-2 rounded-md border-4 border-blue-300" required />
                </div>
                <div className="flex flex-col">
                <label htmlFor="email" className='font-bold'>Email</label>
                <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md border-4 border-blue-300" required />
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
                <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md border-4 border-blue-300" required />
                </div>
                <div className="flex flex-col col-span-2">
                <label htmlFor="subject">
                    <div className="flex align-items font-bold">
                    Message
                    <span className="ml-auto opacity-75 font-bold">Max 500 characters</span>
                    </div>
                </label>
                <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md border-4 border-blue-300  h-6/6" required />
                </div>
            </div>
            <div className="flex justify-end py-4 justify-center">
                <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Contact;