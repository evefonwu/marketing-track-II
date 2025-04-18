import Image from "next/image";
import abstract from "./images/newsletter-abstract.jpg";
import check from "./images/check-fill.png";
import NewsletterForm from "./NewsletterForm";

const items = [
  {
    id: 1,
    content: "Exclusive access to new abstract images and collections",
  },
  {
    id: 2,
    content: "Unlock special promotions only for subscribers",
  },
  {
    id: 3,
    content: "Regular doses of artistic inspiration",
  },
];
export default function NewsletterSection() {
  return (
    <div className="background flex flex-col p-4">
      <div className="bg-white md:p-4">
        <article
          className="newsletter grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 xl:gap-8 py-8 md:py-16 px-3 lg:px-4 xl:px-8"
          aria-labelledby="subscription-heading"
        >
          <section
            className="flex justify-center flex-col gap-12 self-stretch"
            aria-label="Subscription email entry form"
          >
            <div className="flex flex-col gap-8 md:gap-16 self-stretch">
              <h1
                id="subscription-heading"
                className="font-semibold text-3xl md:text-5xl text-neutral-900"
              >
                Get the finest curated abstracts delivered weekly to your inbox
              </h1>
              <ul
                className="flex flex-col gap-5 self-stretch"
                aria-label="Subscription Features"
              >
                {items.length > 0 &&
                  items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 self-stretch"
                    >
                      <span aria-hidden="true">
                        <Image
                          src={check}
                          alt="subscription feature checked"
                          width={24}
                          height={24}
                          priority={false}
                        />
                      </span>
                      <span className="font-bold text-xl text-neutral-600">
                        {item.content}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            <NewsletterForm />
          </section>
          <section
            className="flex justify-center"
            aria-label="Featured abstract artwork"
          >
            <Image
              src={abstract}
              alt="Featured abstract artwork"
              width={688}
              height={688}
              className="object-cover rounded-[16px] w-auto h-auto"
              priority
            />
          </section>
        </article>
      </div>
    </div>
  );
}
