import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      isPopular: false,
      features: [
        "100 active users",
        "1 environment",
        "Unlimited projects",
        "24/7 support"
      ]
    },
    {
      name: "Pro",
      price: "$99",
      isPopular: true,
      features: [
        "5,000 active users",
        "5 environments",
        "Unlimited projects",
        "Priority support",
        "Advanced analytics"
      ]
    },
    {
      name: "Enterprise",
      price: "Contact us",
      isPopular: false,
      features: [
        "Custom users",
        "Unlimited environments",
        "Unlimited projects",
        "Dedicated support",
        "Custom analytics"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1C160C] text-[32px] font-bold leading-tight tracking-[-0.015em]">
          Ready to get started?
        </h1>
        <p className="text-[#1C160C] text-base leading-normal max-w-[720px]">
          Choose the best plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-[#E9DFCE] bg-white p-6"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-[#1C160C] text-base font-bold leading-tight">
                  {plan.name}
                </h3>
                {plan.isPopular && (
                  <span className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-[#019863] px-3 py-[3px]">
                    Most popular
                  </span>
                )}
              </div>
              <p className="flex items-baseline gap-1 text-[#1C160C]">
                <span className="text-4xl font-black tracking-[-0.033em]">{plan.price}</span>
                {plan.price !== "Contact us" && (
                  <span className="text-base font-bold">/month</span>
                )}
              </p>
            </div>

            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors">
              <span className="truncate">
                {plan.price === "Contact us" ? "Contact us" : "Start for free"}
              </span>
            </button>

            <div className="flex flex-col gap-2">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="text-[13px] font-normal leading-normal flex gap-3 text-[#1C160C]"
                >
                  <div className="text-[#1C160C]">
                    <Check size={20} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-[#1C160C] text-lg font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {[
            {
              question: "How does the free trial work?",
              answer: "You can try any plan free for 14 days. No credit card required."
            },
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards and PayPal."
            }
          ].map((faq, index) => (
            <details
              key={index}
              className="flex flex-col rounded-xl border border-[#E9DFCE] bg-white px-[15px] py-[7px] group"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                <p className="text-[#1C160C] text-sm font-medium leading-normal">
                  {faq.question}
                </p>
                <div className="text-[#1C160C] group-open:rotate-180 transition-transform">
                  <ChevronDown size={20} />
                </div>
              </summary>
              <p className="text-[#A18249] text-sm leading-normal pb-2">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 py-10 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#1C160C] text-[32px] font-bold leading-tight">
            Still have questions?
          </h2>
          <p className="text-[#1C160C] text-base leading-normal">
            Contact our team for more information about our plans and pricing.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-[#019863] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#018756] transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
