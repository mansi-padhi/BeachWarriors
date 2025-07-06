import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import treeImg from '../assets/tree.png';
import girl from '../assets/Girl.png';

// Corrected component name and applied a more modern, responsive layout
function VolunteerDashBoard() {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', message: 'Hello! How can I help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [taskProgress, setTaskProgress] = useState(40);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Attend virtual eco-workshop', time: '1 hour', status: 'completed', priority: 'medium' },
    { id: 2, name: 'Invite friends to join eco-volunteering', time: '30 mins', status: 'pending', priority: 'low' },
    
  ]);

  const toggleTaskStatus = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: task.status === 'pending' ? 'completed' : 'pending' };
        }
        return task;
      });
      
      const completedTasks = updatedTasks.filter(task => task.status === 'completed').length;
      setTaskProgress(Math.round((completedTasks / updatedTasks.length) * 100));
      
      return updatedTasks;
    });
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    
    setChatMessages(prev => [...prev, { sender: 'user', message: newMessage }]);
    setNewMessage('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'bot', 
        message: "I'll help you with that! Is there anything specific about eco-volunteering you'd like to know?" 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          
          {/* Main Content Area (2/3 width on large screens) */}
          <div className="w-full lg:w-2/3 space-y-8 p-6">
            
            <div className=" p-4">
              <div className="flex items-center">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  <img src={girl} alt="" srcset="" />
                </div>
                <div className="ml-6">
                  <h1 className="text-3xl font-bold text-gray-800">Mansi Padhi</h1>
                  <p className="text-gray-600 mt-1">Volunteer since: March 02, 2025</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      🌿 Eco Warrior
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      🏆 5 Events Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Event History & Certificates</h2>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors flex items-center gap-2">
                  View All
                </button>
              </div>
              
              <div className="overflow-x-auto pb-2">
                <div className="flex space-x-4">
                  {[
                    { title: "Juhu Beach Cleanup ", date: "May 22, 2025", hours: "4 hours contributed", description: "Collected 15kg of plastic waste from coastal areas.", icon: "🏖️" },
                    { title: "Bandra Beach Cleanup", date: "April 10, 2025", hours: "3 hours contributed", description: "Planted 12 native tree species in community park.", icon: "🌊" },
                    { title: "Versona Beach Cleanup", date: "March 15, 2025", hours: "5 hours contributed", description: "Taught recycling basics to 30 elementary students.", icon: "🏖️" }
                  ].map((event, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 min-w-[280px] border hover:shadow-md transition-shadow">
                      <div className="flex mb-3">
                        <div className="w-20 h-20 rounded-md bg-gray-200 flex items-center justify-center text-4xl">
                          {event.icon}
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="font-semibold text-gray-800">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.date}</p>
                          <p className="text-xs text-gray-500 mt-1">{event.hours}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{event.description}</p>
                      <button className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2">
                        Download Certificate
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Volunteer Leaderboard</h2>
                <div className="text-sm text-gray-500">Updated: June 21, 2025</div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volunteer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Events</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { rank: 1, name: "Nishita Karda",  events: 24, badge: "🥇", current: false },
                      { rank: 2, name: "Jessica Lee", events: 19, badge: "🥈", current: false },
                      { rank: 3, name: "Mansi Padhi  (You)",  events: 15, badge: "🥉", current: true }
                    ].map((volunteer) => (
                      <tr key={volunteer.rank} className={volunteer.current ? "bg-blue-50" : ""}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-2xl`}>{volunteer.badge}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-4">
                              <span className="text-white font-bold">
                                {volunteer.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className={`text-sm font-medium ${volunteer.current ? 'text-black font-bold' : 'text-gray-900'}`}>
                              {volunteer.name}
                            </div>
                          </div>
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${volunteer.current ? 'text-gray-900' : 'text-gray-500'}`}>
                          {volunteer.events}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  View Complete Leaderboard
                </button>
              </div>
            </div>

            <div className="bg-white p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Today's Tasks</h2>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{taskProgress}%</span> completed
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${taskProgress}%` }}></div>
              </div>
              <div className="space-y-3">
                {tasks.map(task => (
                  <div key={task.id} className={`flex items-center p-3 rounded-lg border transition-all ${task.status === 'completed' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 hover:shadow-sm'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer mr-4 transition-all ${task.status === 'completed' ? 'bg-blue-500 text-white' : 'border-2 border-gray-300 hover:border-blue-400'}`} onClick={() => toggleTaskStatus(task.id)}>
                      {task.status === 'completed' && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium transition-all ${
                        task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'
                      }`}>
                        {task.name}
                      </h3>
                      <div className="flex mt-1 text-xs gap-3 items-center">
                        <span className="text-gray-500 flex items-center gap-1">
                           {task.time}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' : 
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (1/3 width on large screens) */}
          <div className="w-full lg:w-1/3 space-y-8 mt-8 lg:mt-0 p-10">
            <div className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                🐋 Eco Assistant
              </h2>
              <div className="h-64 overflow-y-auto mb-4 bg-gray-50 rounded-lg p-3 space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`inline-block rounded-lg py-2 px-3 max-w-[85%] text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-800'
                      }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  className="flex-1 border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Ask anything..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />

                <button 
                  className="bg-blue-300 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={sendMessage}
                >
                  💬
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Upcoming events", "How to earn more points?", "Certificate status"].map((suggestion) => (
                  <button 
                    key={suggestion}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-1 px-2.5 rounded-full transition-colors"
                    onClick={() => setNewMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Eco Coins</h2>
                <div className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2">
                  875
                </div>
              </div>
              
              <Link 
                to="/rewards" 
                className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-center py-3 px-4 rounded-lg transition-colors mt-4"
              >
                Redeem EcoCoins
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-center text-gray-800">Waste Segregation</h2>
                
              </div>
              
              <Link 
                to="/rewards" 
                className="block w-full bg-lime-200 text-black font-bold text-center py-3 px-4 rounded-lg transition-colors mt-4"
              >
                Click
              </Link>
            </div>
            
            <div className="bg-white  p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Your Impact Tree</h2>
              <div className="relative">
                <div className="w-2/3 mx-auto">
                  <div className="aspect-square mb-4 rounded-lg bg-gradient-to-b from-white-100 to-white-200 flex items-center justify-center">
                    <img src={treeImg} alt="tree" className="w-3/4 h-3/4 object-contain" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                    🌱 Level 7 Growth
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerDashBoard;
