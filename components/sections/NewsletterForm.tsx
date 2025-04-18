"use client";

export default function NewsletterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex py-1.5">
        <label
          htmlFor={`email-input`}
          className="w-full md:w-110 font-bold text-md"
        >
          Email
          <div className="flex flex-col gap-2 md:flex-row pt-1.5">
            <input
              placeholder="Enter your email"
              id="email-input"
              type="email"
              name="email"
              autoComplete="email"
              className="bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 w-full"
            />
            <button
              className=" bg-indigo-700 px-3.5 py-3 rounded"
              type="submit"
            >
              <span className="text-white">Subscribe</span>
            </button>
          </div>
        </label>
      </div>
    </form>
  );
}
