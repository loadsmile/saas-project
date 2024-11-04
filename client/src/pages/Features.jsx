import { Link } from 'react-router-dom';
import {
  Rocket,
  ArrowUpRight,
  Info,
  Settings,
  LayoutDashboard,
  Lock,
  ChevronDown
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Rocket size={24} />,
      title: "Launch Quickly",
      description: "Launch your MVP in minutes."
    },
    {
      icon: <ArrowUpRight size={24} />,
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
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Why choose Acme SaaS?
        </h1>
        <p className="text-[#1C160C] text-base font-normal leading-normal max-w-[720px]">
          We&apos;re here to help you succeed. Get started with free credits and take advantage of our flexible pricing model.
        </p>
        <Link
          to="/register"
          className="bg-[#019863] text-white px-6 py-3 rounded-full text-base font-bold w-fit hover:bg-[#018756] transition-colors"
        >
          Try Acme SaaS for free
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-white p-4 flex-col hover:border-[#019863] transition-colors duration-200"
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

      <div className="flex flex-col p-4 gap-3">
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

      <div className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Ready to get started?
            </h2>
            <p className="text-[#1C160C] text-base font-normal leading-normal">
              Create an account in minutes and start building your SaaS product today.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/register"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-[#018756] transition-colors"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
