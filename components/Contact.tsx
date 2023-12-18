import Image from "next/image";
import CustomButton from "./CustomButton";

const Contact = () => {
  return (
    <section
      className="flex items-center w-full pt-[60px] xl:pt-[120px] pb-[60px] h-full padding-x"
      id="contact"
    >
      <div className="container mx-auto">
        {/* Form and Image Container */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between h-full gap-[50px] w-full">
          {/* Image  */}
          {/* <div className="pt-10 rounded-[20px] padding-y ">
            <Image
              src="/denosh.jpg"
              alt=""
              width={550}
              height={200}
              className="object-contain rounded-[50px]"
            />
          </div> */}
          {/* Form */}
          <form className="flex flex-col justify-center items-center gap-y-5 w-full paddding-y padding-x pt-10 pb-10">
            <h1 className="h2 text-primary text-center xl:text-left">
              Get In <span className="text-secondary">Touch With Us</span>
            </h1>
            <fieldset
              id="form"
              className="flex flex-col w-full gap-y-5 text-primary font-semibold shadow-xl p-5 rounded-[20px] "
            >
              <div className="flex flex-col ">
                <label htmlFor="full-name">Full Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  required
                  className="bg-background outline-none h-10 border rounded-lg pl-2 focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className="bg-background outline-none h-10 border rounded-lg pl-2 focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location">Phone Number:</label>
                <input
                  type="text"
                  name="location"
                  placeholder="08023456398"
                  required
                  className="bg-background outline-none h-10 border rounded-lg pl-2 focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Example:Lagos"
                  required
                  className="bg-background outline-none h-10 border rounded-lg pl-2 focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  cols={30}
                  placeholder="Message"
                  required
                  className="bg-background outline-none h-10 border rounded-lg pl-2 pt-2 focus:border-primary"
                ></textarea>
              </div>
            </fieldset>
            <CustomButton
              title="Submit"
              btnType="submit"
              containerStyles="bg-primary hover:bg-primary-hover text-white rounded-xl mt-10 uppercase btn-lg btn "
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
