import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { Link } from 'react-router-dom';
import {
  Search,
  Building2,
  Code2,
  HelpCircle,
  Settings,
  LogOut,
  Play,
  Plus
} from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('organizations');
  const [showNewOrgModal, setShowNewOrgModal] = useState(false);
  const [newOrgName, setNewOrgName] = useState('');
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'My First Organization' }
  ]);

  const sidebarLinks = [
    { icon: <Building2 size={24} />, label: 'Organizations', id: 'organizations', path: '/organizations' },
    { icon: <Code2 size={24} />, label: 'Projects', id: 'projects', path: '/projects' },
    { icon: <Settings size={24} />, label: 'Settings', id: 'settings', path: '/settings' },
    { icon: <HelpCircle size={24} />, label: 'Support', id: 'support', path: '/support' }
  ];

  const handleCreateOrg = () => {
    if (newOrgName.trim()) {
      setOrganizations([
        ...organizations,
        { id: organizations.length + 1, name: newOrgName }
      ]);
      setNewOrgName('');
      setShowNewOrgModal(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-80 border-r border-[#F4EFE6] p-4">
        <div className="flex flex-col h-full justify-between">
          {/* User Info */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6]" />
              <div>
                <h3 className="text-[#1C160C] text-base font-medium">{user?.email}</h3>
                <p className="text-[#A18249] text-sm">Admin</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full ${
                    activeTab === link.id ? 'bg-[#F4EFE6]' : ''
                  }`}
                  onClick={() => setActiveTab(link.id)}
                >
                  <span className="text-[#1C160C]">{link.icon}</span>
                  <span className="text-[#1C160C] text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#019863] text-white px-4 py-2 rounded-full text-sm font-bold">
              Upgrade Plan
            </button>
            <button className="flex items-center gap-3 px-3 py-2">
              <LogOut size={24} className="text-[#1C160C]" />
              <span className="text-[#1C160C] text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-[#F4EFE6] px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-[#1C160C]">Admin Dashboard</h2>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#F4EFE6] rounded-xl pl-10 pr-4 py-2 text-[#1C160C]"
              />
              <Search className="absolute left-3 top-2.5 text-[#A18249]" size={20} />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 max-w-[960px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-black text-[#1C160C] tracking-tight">Organizations</h1>
              <p className="text-[#A18249]">Manage your organizations and projects.</p>
            </div>
            <button
              onClick={() => setShowNewOrgModal(true)}
              className="bg-[#F4EFE6] text-[#1C160C] px-4 py-2 rounded-full text-sm font-bold"
            >
              New Organization
            </button>
          </div>

          {/* Get Started Card */}
          <div className="bg-white border border-[#E9DFCE] rounded-xl p-6 mb-4">
            <h3 className="text-lg font-bold text-[#1C160C] mb-2">Get Started</h3>
            <div className="flex justify-between items-center">
              <p className="text-[#A18249]">
                Create an organization to get started. Alternatively, ask your organization admin to invite you.
              </p>
              <button
                onClick={() => setShowNewOrgModal(true)}
                className="flex items-center gap-2 bg-[#F4EFE6] text-[#1C160C] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Plus size={18} />
                <span>New Organization</span>
              </button>
            </div>
          </div>

          {/* Demo Card */}
          <div className="bg-white border border-[#E9DFCE] rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#1C160C] mb-2">Try Demo</h3>
            <div className="flex justify-between items-center">
              <p className="text-[#A18249]">
                We have built a Q&A chatbot that answers questions based on the documentation. Interact with it to see traces.
              </p>
              <button className="flex items-center gap-2 bg-[#F4EFE6] text-[#1C160C] px-4 py-2 rounded-full text-sm font-medium">
                <Play size={18} />
                <span>View Demo Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Organization Modal */}
      {showNewOrgModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Create New Organization</h3>
            <input
              type="text"
              placeholder="Organization Name"
              value={newOrgName}
              onChange={(e) => setNewOrgName(e.target.value)}
              className="w-full border border-[#F4EFE6] rounded-lg px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowNewOrgModal(false)}
                className="px-4 py-2 text-[#1C160C]"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateOrg}
                className="bg-[#019863] text-white px-4 py-2 rounded-full"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
