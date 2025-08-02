import { FaRobot } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ChatBotSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaRobot className="text-yellow-300" size={24} />
            <div>
              <h2 className="font-bold text-xl">Sports AI Assistant</h2>
              <p className="text-sm text-green-200">Online & Ready to Help</p>
            </div>
          </div>
          <span className="bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-full">
            AI Powered
          </span>
        </div>

        {/* Chat Area */}
        <div className="p-5 space-y-4 max-h-[500px] overflow-y-auto text-sm">
          {/* User Message */}
          <div className="w-max ml-auto bg-blue-500 text-white p-3 rounded-xl shadow">
            <p>How can I improve my basketball shooting accuracy?</p>
            <span className="text-xs text-right block mt-1 text-white/80">2:34 PM</span>
          </div>

          {/* AI Message */}
          <div className="w-max bg-white text-[#666666] border border-gray-300 p-3 rounded-xl shadow max-w-md">
            <p>
              Great question! Here are 3 key techniques:
              <br />1. Snap your wrist after the release.
              <br />2. Keep your shooting foot slightly ahead.
              <br />3. Maintain consistent rhythm.
              <br />Would you like a custom practice routine?
            </p>
            <span className="text-xs text-gray-500 mt-1 block">2:34 PM</span>
          </div>

          {/* User */}
          <div className="w-max ml-auto bg-blue-500 text-white p-3 rounded-xl shadow">
            <p>Yes, that would be helpful!</p>
            <span className="text-xs text-right block mt-1 text-white/80">2:35 PM</span>
          </div>

          {/* AI */}
          <div className="w-max bg-white text-[#666666] border border-gray-300 p-3 rounded-xl shadow max-w-md">
            <p>
              Perfect! Here's a 30-minute shooting routine tailored to your skill level...
            </p>
          </div>
        </div>

        {/* Input Field */}
        <div className="p-4 border-t bg-white/70 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me anything about sports..."
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
              <FiSend size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatBotSection;
