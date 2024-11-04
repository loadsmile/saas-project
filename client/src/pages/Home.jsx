import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: "Launch quickly",
      description: "Use our templates and integrations to build your MVP in minutes.",
      image: "https://cdn.usegalileo.ai/stability/185f2fc7-18f9-418b-b490-9782186beb52.png"
    },
    {
      title: "Scalable platform",
      description: "Our platform grows with you, from your first user to your millionth.",
      image: "https://cdn.usegalileo.ai/sdxl10/ab6ce035-faa0-418a-93a5-fccaa6fa4434.png"
    },
    {
      title: "Mobile first",
      description: "Our mobile SDKs make it easy to go from web to mobile.",
      image: "https://cdn.usegalileo.ai/stability/652da435-0ee4-4108-8e41-0f3f38260e7f.png"
    }
  ];

  const testimonials = [
    {
      name: "Vicky, Founder at SaaS Co",
      text: "Acme SaaS has been a game changer for us. Their platform is easy to use and we've been able to launch new features faster than ever before.",
      image: "https://cdn.usegalileo.ai/stability/e237c075-618e-47e9-804e-9f27b4aa60a0.png"
    },
    {
      name: "John, CTO at Tech Inc",
      text: "We've been using Acme SaaS for a few months now and have been really impressed with the performance and reliability of their platform.",
      image: "https://cdn.usegalileo.ai/stability/13795b1d-5f77-4766-9387-5b7a79c2ec27.png"
    },
    {
      name: "Sara, Head of Product at Startup",
      text: "The support team at Acme SaaS has been fantastic. They're always quick to respond and have helped us with everything from troubleshooting to best practices.",
      image: "https://cdn.usegalileo.ai/stability/bdc83fc7-ccf6-47b9-b379-9ec7b08148da.png"
    },
    {
      name: "Mike, CEO at Software Co",
      text: "Acme SaaS has saved us a lot of time and resources. Their platform is very intuitive and has allowed us to focus on building great products.",
      image: "https://cdn.usegalileo.ai/stability/2e167adf-e133-4e93-a057-9760ba2e5e40.png"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto px-4">
        <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://cdn.usegalileo.ai/stability/7386650c-b020-4c1f-80ba-c71a7548f0fa.png"
              alt="Hero Illustration"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1C160C] text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Build and scale your SaaS product
              </h1>
              <p className="text-[#1C160C] text-sm md:text-base font-normal leading-normal">
                Acme SaaS is the platform for building, managing and scaling your SaaS product. It&apos;s the fastest way to launch and scale your SaaS business.
              </p>
            </div>
            <Link
              to="/register"
              className="flex justify-center items-center h-12 px-5 bg-[#019863] text-white rounded-full text-base font-bold tracking-[0.015em] hover:bg-[#018756] w-fit"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#1C160C] text-[32px] font-bold leading-tight">
                Why choose Acme SaaS?
              </h2>
              <p className="text-[#1C160C] text-base">
                We&apos;re here to help you succeed. Get started with free credits and take advantage of our flexible pricing model.
              </p>
            </div>
            <Link
              to="/register"
              className="bg-[#019863] text-white px-6 py-3 rounded-full text-base font-bold w-fit hover:bg-[#018756]"
            >
              Try Acme SaaS for free
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full aspect-video object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-[#1C160C] text-base font-medium">{feature.title}</h3>
                  <p className="text-[#A18249] text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#E9DFCE]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#1C160C] text-base font-bold">Basic</h3>
                </div>
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-[-0.033em]">$0</span>
                  <span className="text-base font-bold">/month</span>
                </p>
              </div>
              <button className="w-full h-10 bg-[#F4EFE6] rounded-full text-sm font-bold">
                Start for free
              </button>
              <div className="flex flex-col gap-2">
                {['100 active users', 'Unlimited projects', '1 environment'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-[13px]">
                    <svg className="w-5 h-5 text-[#1C160C]" viewBox="0 0 256 256">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#E9DFCE]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#1C160C] text-base font-bold">Pro</h3>
                  <span className="bg-[#019863] text-white px-3 py-1 rounded-full text-xs">
                    Most popular
                  </span>
                </div>
                <p className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-[-0.033em]">$99</span>
                  <span className="text-base font-bold">/month</span>
                </p>
              </div>
              <button className="w-full h-10 bg-[#F4EFE6] rounded-full text-sm font-bold">
                Start for free
              </button>
              {/* Add Pro plan features similar to Basic */}
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#E9DFCE]">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#1C160C] text-base font-bold">Enterprise</h3>
                <p className="text-4xl font-black tracking-[-0.033em]">Contact us</p>
              </div>
              <button className="w-full h-10 bg-[#F4EFE6] rounded-full text-sm font-bold">
                Contact us
              </button>
              {/* Add Enterprise plan features */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <h2 className="text-[#1C160C] text-lg font-bold tracking-[-0.015em] mb-8">
            What customers are saying
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-4 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div>
                  <p className="text-[#1C160C] text-base font-medium">{testimonial.name}</p>
                  <p className="text-[#A18249] text-sm mt-2">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1C160C] text-[32px] font-bold leading-tight">
                Ready to get started?
              </h2>
              <p className="text-[#1C160C] text-base">
                Create an account in minutes and start building your SaaS product today.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/register"
                className="bg-[#019863] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#018756]"
              >
                Create an account
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
