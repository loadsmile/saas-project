import { useState } from 'react';
import {
  BookOpen, Lock, Shuffle, Bell, AlertCircle, TrendingUp,
  FileCode, PlayCircle, HelpCircle, Code, Terminal, Database,
  Video, Book, MessageSquare, HelpingHand, Lightbulb, Compass
} from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabContents = {
    'getting-started': [
      {
        icon: <BookOpen size={24} />,
        title: "Quickstart Guide",
        description: "Set up your SaaS product with our step-by-step guide."
      },
      {
        icon: <Lock size={24} />,
        title: "Authentication",
        description: "Secure your API access with our authentication methods."
      },
      {
        icon: <Shuffle size={24} />,
        title: "Endpoints",
        description: "Discover how to interact with our API endpoints."
      },
      {
        icon: <Bell size={24} />,
        title: "Webhooks",
        description: "Learn to configure and respond to webhooks."
      },
      {
        icon: <AlertCircle size={24} />,
        title: "Error Handling",
        description: "Understand how to handle errors in our API."
      },
      {
        icon: <TrendingUp size={24} />,
        title: "Rate Limits",
        description: "Know the limits and how to manage API requests."
      }
    ],
    'api-reference': [
      {
        icon: <Code size={24} />,
        title: "API Overview",
        description: "Learn about our API structure and conventions."
      },
      {
        icon: <Terminal size={24} />,
        title: "Authentication API",
        description: "Detailed documentation for auth endpoints."
      },
      {
        icon: <Database size={24} />,
        title: "Data API",
        description: "Manage your data through our REST API."
      }
    ],
    'tutorials': [
      {
        icon: <Video size={24} />,
        title: "Video Tutorials",
        description: "Watch step-by-step video guides."
      },
      {
        icon: <Book size={24} />,
        title: "Written Guides",
        description: "Detailed written tutorials and examples."
      },
      {
        icon: <MessageSquare size={24} />,
        title: "Community Guides",
        description: "Tutorials created by the community."
      }
    ],
    'faq': [
      {
        icon: <HelpingHand size={24} />,
        title: "Common Issues",
        description: "Solutions to frequently encountered problems."
      },
      {
        icon: <Lightbulb size={24} />,
        title: "Best Practices",
        description: "Recommended approaches and patterns."
      },
      {
        icon: <Compass size={24} />,
        title: "Troubleshooting",
        description: "Guide to solving common problems."
      }
    ]
  };

  const tabs = [
    {
      id: 'getting-started',
      icon: BookOpen,
      label: 'Getting Started'
    },
    {
      id: 'api-reference',
      icon: FileCode,
      label: 'API Reference'
    },
    {
      id: 'tutorials',
      icon: PlayCircle,
      label: 'Tutorials'
    },
    {
      id: 'faq',
      icon: HelpCircle,
      label: 'FAQ'
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1C160C] text-[32px] font-bold leading-tight tracking-[-0.015em]">
          Documentation
        </h1>
        <p className="text-[#1C160C] text-base leading-normal max-w-[720px]">
          Explore our comprehensive guides and API documentation to get the most out of TechTonic SaaS.
          Learn how to set up your environment, integrate our platform into your workflow, and leverage advanced features to enhance your SaaS product.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-[#E9DFCE]">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center border-b-[3px] ${
                  activeTab === tab.id
                    ? 'border-[#019863] text-[#1C160C]'
                    : 'border-transparent text-[#A18249]'
                } gap-1 pb-[7px] pt-2.5 flex-1 transition-colors duration-200`}
              >
                <Icon size={24} />
                <span className="text-sm font-bold tracking-[0.015em]">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Documentation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tabContents[activeTab].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg border border-[#E9DFCE] bg-white p-4 hover:border-[#019863] transition-colors duration-200"
          >
            <div className="text-[#1C160C]">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1C160C] text-base font-bold leading-tight">
                {item.title}
              </h2>
              <p className="text-[#A18249] text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
