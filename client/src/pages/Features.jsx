import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M240.67,114.66L152.48,58.5A15.91,15.91,0,0,0,128,71.84v37.3L48.48,58.5A15.91,15.91,0,0,0,24,71.84V184.16A15.92,15.92,0,0,0,48.48,197.5L128,146.86v37.3a15.92,15.92,0,0,0,24.48,13.34l88.19-56.16a15.8,15.8,0,0,0,0-26.68Z" />
        </svg>
      ),
      title: "Launch Quickly",
      description: "Launch your MVP in minutes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34L56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32Z" />
        </svg>
      ),
      title: "Scalable Platform",
      description: "Grow your platform with your business."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Assistance whenever you need it."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
        </svg>
      ),
      title: "Customizable Workflows",
      description: "Tailor workflows to your needs."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" />
        </svg>
      ),
      title: "Real-Time Analytics",
      description: "Make informed decisions with up-to-date data."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Z" />
        </svg>
      ),
      title: "Security & Compliance",
      description: "Meet the highest security standards."
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1C160C] text-[32px] font-bold leading-tight tracking-[-0.033em] max-w-[720px]">
          Why choose Acme SaaS?
        </h1>
        <p className="text-[#1C160C] text-base leading-normal max-w-[720px]">
          We&apos;re here to help you succeed. Get started with free credits and take advantage of our flexible pricing model.
        </p>
        <Link
          to="/register"
          className="bg-[#019863] text-white px-6 py-3 rounded-full text-base font-bold w-fit hover:bg-[#018756] transition-colors"
        >
          Try Acme SaaS for free
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg border border-[#E9DFCE] bg-white p-4"
          >
            <div className="text-[#1C160C]">
              {feature.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1C160C] text-base font-bold leading-tight">
                {feature.title}
              </h2>
              <p className="text-[#A18249] text-sm leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-3 mt-8">
        <h2 className="text-[#1C160C] text-lg font-bold leading-tight mb-4">
          Frequently Asked Questions
        </h2>
        {features.map((feature, index) => (
          <details
            key={index}
            className="flex flex-col rounded-xl border border-[#E9DFCE] bg-white px-[15px] py-[7px] group"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <p className="text-[#1C160C] text-sm font-medium leading-normal">
                {feature.title}
              </p>
              <div className="text-[#1C160C] group-open:rotate-180 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </summary>
            <p className="text-[#A18249] text-sm leading-normal pb-2">
              {feature.description}
            </p>
          </details>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 py-10 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#1C160C] text-[32px] font-bold leading-tight">
            Ready to get started?
          </h2>
          <p className="text-[#1C160C] text-base leading-normal">
            Create an account in minutes and start building your SaaS product today.
          </p>
        </div>
        <Link
          to="/register"
          className="bg-[#019863] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#018756] transition-colors"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Features;
