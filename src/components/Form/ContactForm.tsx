import { Button } from "../UI/Button";
import Input from "./Input";

const ContactForm = () => {

  return (
    <div className="flex flex-col bg-cover bg-no-repeat bg-center h-[90dvh]
                    bg-[url('https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

      <div
        style={{ backgroundColor: 'rgba(247, 212, 195, 0.4)' }}
        className="backdrop-blur-md rounded-lg p-4 m-auto w-[80vw] lg:w-[50vw] xl:w-[40vw]">
        <div className="md:text-xl text-md leading-normal font-semibold mb-4 text-textColor">
          Get in touch with me
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0">
          <div className="col-span-2 lg:col-span-1">
            <Input type="input" name="Your Name" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Input type="input" name="Your Email" />
          </div>
          <div className="col-span-2 row-span-2">
            <Input type="textarea" name="Your Message" />
          </div>
          <div className="col-span-2">
            <Button>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
