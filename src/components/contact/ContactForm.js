import React from 'react';
import Message from './Message';

function encode (data) {
  return Object.keys (data)
    .map (
      key => encodeURIComponent (key) + '=' + encodeURIComponent (data[key])
    )
    .join ('&');
}

export default function ContactForm () {
  const [state, setState] = React.useState ({});
  const [message, setMessage] = React.useState (null);

  const handleChange = e => {
    setState ({...state, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    const form = e.target;

    fetch ('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode ({
        'form-name': form.getAttribute ('name'),
        ...state,
      }),
    })
      .then (() => {
        form.reset ();
        setMessage ('Thank you! We will reach out to you.');
      })
      .catch (error => {
        setMessage (error);
      });
  };

  return (
    <section>
      <form
        name="Brahmilabs Contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="Brahmilabs Contact" />
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={handleChange}
            />
          </div>
        </div>
        {message &&
          <Message>
            {message}
          </Message>}
        <ul className="actions">
          <li>
            <button type="submit">Send</button>
          </li>
        </ul>
      </form>
    </section>
  );
}
