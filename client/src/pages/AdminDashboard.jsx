import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import {
  Users,
  FileText,
  User,
  BarChart2,
  } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const metrics = {
    activeUsers: {
      count: 1245,
      trend: '+5%',
      isPositive: true
    },
    monthlyRevenue: {
      count: '$35,000',
      trend: '+8%',
      isPositive: true
    },
    supportTickets: {
      count: 78,
      trend: '-2%',
      isPositive: false
    }
  };

  const recentActivities = [
    {
      type: 'user',
      title: 'New User Registered',
      description: 'John Doe - 2 hours ago',
      time: '2h',
      icon: <User size={24} />
    },
    {
      type: 'revenue',
      title: 'Revenue Report Generated',
      description: 'Monthly report for September',
      time: '4h',
      icon: <FileText size={24} />
    }
  ];

  const quickActions = [
    {
      title: 'Add New User',
      icon: <Users size={24} />,
      action: () => console.log('Add user')
    },
    {
      title: 'Generate Report',
      icon: <FileText size={24} />,
      action: () => console.log('Generate report')
    },
    {
      title: 'View Analytics',
      icon: <BarChart2 size={24} />,
      action: () => console.log('View analytics')
    }
  ];

  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1C160C]">
            Welcome back, {user?.email}
          </h1>
          <p className="text-[#A18249]">Here&apos;s what&apos;s happening with your SaaS platform.</p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="rounded-lg border border-[#E9DFCE] px-4 py-2"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(metrics).map(([key, data]) => (
          <div key={key} className="flex flex-col gap-2 rounded-xl p-6 bg-[#F4EFE6]">
            <h3 className="text-[#1C160C] text-base font-medium">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <p className="text-[#1C160C] text-2xl font-bold">{data.count}</p>
            <p className={`text-base font-medium ${
              data.isPositive ? 'text-[#019863]' : 'text-[#C12929]'
            }`}>
              {data.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-[#1C160C] text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex items-center gap-3 rounded-lg border border-[#E9DFCE] bg-white p-4 hover:border-[#019863] transition-colors"
            >
              <span className="text-[#1C160C]">{action.icon}</span>
              <span className="text-[#1C160C] font-bold">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <h2 className="text-[#1C160C] text-xl font-bold mb-4">Recent Activities</h2>
        <div className="flex flex-col gap-2">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-[#E9DFCE]"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-[#F4EFE6] p-3">
                  {activity.icon}
                </div>
                <div>
                  <p className="text-[#1C160C] font-medium">{activity.title}</p>
                  <p className="text-[#A18249] text-sm">{activity.description}</p>
                </div>
              </div>
              <span className="text-[#A18249] text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-8 text-center">
        <h2 className="text-[#1C160C] text-xl font-bold mb-2">Need Help?</h2>
        <p className="text-[#A18249] mb-4">Contact our support team for assistance</p>
        <button className="bg-[#019863] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
