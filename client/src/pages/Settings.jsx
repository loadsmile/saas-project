import { useAuth } from '../context/useAuth';
import {
  User,
  HelpCircle
} from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();

  const settingsCategories = [
    {
      title: 'Account Information',
      icon: <User size={24} />,
      settings: [
        {
          label: 'Email',
          value: user?.email,
          type: 'text',
          editable: false
        },
        {
          label: 'Username',
          value: user?.displayName,
          type: 'text',
          editable: true
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1C160C]">Account Settings</h1>
        <p className="text-[#A18249] mt-2">Manage your account preferences and settings</p>
      </div>

      <div className="space-y-6">
        {settingsCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-[#F4EFE6]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#1C160C]">{category.icon}</span>
              <h2 className="text-xl font-bold text-[#1C160C]">{category.title}</h2>
            </div>

            <div className="space-y-4">
              {category.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between">
                  <div>
                    <p className="text-[#1C160C] font-medium">{setting.label}</p>
                  </div>
                  {setting.type === 'text' && (
                    <input
                      type="text"
                      value={setting.value}
                      disabled={!setting.editable}
                      className="bg-[#F4EFE6] rounded-lg px-4 py-2 text-[#1C160C]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl p-6 border border-[#F4EFE6]">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={24} className="text-[#1C160C]" />
            <h2 className="text-xl font-bold text-[#1C160C]">Need Help?</h2>
          </div>
          <p className="text-[#A18249] mb-4">Contact our support team for assistance</p>
          <button className="bg-[#019863] text-white px-4 py-2 rounded-full text-sm font-bold">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
