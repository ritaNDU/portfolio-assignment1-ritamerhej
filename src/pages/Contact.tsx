const Contact = () => {
  return (
    <div className="pages-common-style gap-10 h-screen">
      <div className="w-full  bg-[#00008B] p-6 ">
        <h2 className="text-blue-50 font-bold mb-2 ">Get in touch</h2>
        <p className="mb-2 text-blue-100 text-lg font-medium w-11/12">
          If you need further clarification or are seeking a skilled developer
          for your project, don't hesitate to reach out. I'm here to provide any
          additional information you require and discuss how I can contribute to
          your goals. Let's collaborate and bring your ideas to life!
        </p>
      </div>

      <form
        id="contact-form"
        className="flex flex-col gap-4  place-self-center lg:w-4/12 w-2/3"
        onSubmit={() => alert("Done!")}
      >
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          className="input-style"
          required
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="input-style"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-style"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          form="contact-form"
          rows={5}
          cols={33}
          style={{ resize: "none" }}
          className="input-style"
          required
        ></textarea>

        <button role="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
