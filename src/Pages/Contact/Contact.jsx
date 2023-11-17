import Container from "../../Components/Container/Container";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import HeadingTitle from "../../Components/HeadingTitle/HeadingTitle";
import img from "../../assets/contact/banner.jpg";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="space-y-10 mb-20">
      <CoverBanner
        coverTitle={"CONTACT US"}
        coverDec={"Would you like to try a dish?"}
        img={img}
      ></CoverBanner>
      <Container>
        <HeadingTitle
          subTitle={"---Send Us a Message---"}
          mainTitle={"CONTACT FORM"}
        ></HeadingTitle>

        <div className="max-w-2xl mx-auto mt-10 p-6 bg-base-200 rounded-md shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Section */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message Section */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-[#D1A054] text-white p-3 rounded-md focus:outline-none "
            >
              <div className="flex justify-center items-center gap-2">
                <p>Send Message</p> <IoIosSend className="text-2xl"></IoIosSend>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
