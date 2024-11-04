import { Link } from 'react-router-dom';
import {
  FastForward,
  Maximize2,
  Info,
  Settings,
  LayoutDashboard,
  Lock,
  ChevronDown
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FastForward size={24} />,
      title: "Launch Quickly",
      description: "Launch your MVP in minutes."
    },
    {
      icon: <Maximize2 size={24} />,
      title: "Scalable Platform",
      description: "Grow your platform with your business."
    },
    {
      icon: <Info size={24} />,
      title: "24/7 Support",
      description: "Assistance whenever you need it."
    },
    {
      icon: <Settings size={24} />,
      title: "Customizable Workflows",
      description: "Tailor workflows to your needs."
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Real-Time Analytics",
      description: "Make informed decisions with up-to-date data."
    },
    {
      icon: <Lock size={24} />,
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
                <ChevronDown size={20} />
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
