function Contact() {
  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ backgroundColor: "#023535" }}
    >
      <div className="max-w-xl mx-auto bg-white rounded-xl p-8 text-black">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        <p className="mb-6">
          Have feedback, questions, or suggestions? We’d love to hear from you.
        </p>

        <div className="space-y-4">
          <p>
            <strong>Email:</strong> hello@cuisineinternational.app
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F4511E" }}
            >
              github.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
