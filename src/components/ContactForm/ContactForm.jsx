export const ContactForm = props => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <button type="submit">Add contact</button>
    </form>
  );
};
