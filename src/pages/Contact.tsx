const Contact = () => {
  return (
    <div className="pages-common-style gap-10 ">
      <div className="w-full  bg-[#00008B] p-6">
        <h2 className="text-blue-50 font-bold mb-2 ">Get in touch</h2>
        <p className="mb-2 text-blue-100 text-md font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          nemo aperiam debitis obcaecati! Nihil, temporibus? Cupiditate nihil
          fugiat dolorum corrupti officia, quos pariatur, ad eos molestias
          inventore nesciunt totam dolor?
        </p>
      </div>

      <form
        id="contact-form"
        className="flex flex-col gap-4 px-6 mb-4 bg-white "
        onSubmit={() => alert("Done!")}
      >
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          className="input-style"
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="input-style"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-style"
        />
        <textarea
          name="message"
          placeholder="Message"
          form="contact-form"
          rows={5}
          cols={33}
          style={{ resize: "none" }}
          className="input-style"
        ></textarea>

        <button
          role="submit"
          className="text-[#00008B] font-bold border-2 border-[#00008B] p-2 rounded-xl hover:bg-[#00008B] hover:text-white focus:ring-2 focus:outline-none focus:ring-red-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
