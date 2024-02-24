import PageHeading from "../components/PageHeading";

const Contact = () => {
  return (
    <>
      <PageHeading title="Contact" />
      <div>
        <h1>Get in touch</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          nemo aperiam debitis obcaecati! Nihil, temporibus? Cupiditate nihil
          fugiat dolorum corrupti officia, quos pariatur, ad eos molestias
          inventore nesciunt totam dolor?
        </p>
        <p>Icon Lebanon, Mansourieh</p>
        <p>Icon +961 01 234 567</p>
        <p>Icon ritamerhej@duck.com</p>
      </div>
      <form id="contact-form" onSubmit={() => alert("Done!")}>
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          required
        />
        <input type="text" name="last-name" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Message"
          form="contact-form"
          rows={5}
          cols={33}
          style={{ resize: "none" }}
          required
        ></textarea>

        <button role="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
