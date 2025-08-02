'use client';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineMessage } from 'react-icons/ai';

const athletes = [
  {
    name: 'Alex Johnson',
    rating: '4.9',
    sport: 'Basketball',
    location: 'New York, USA',
    role: 'Point Guard',
    badge: 'Professional',
    status: 'Online',
  },
  {
    name: 'Maria Rodriguez',
    rating: '4.8',
    sport: 'Tennis',
    location: 'Madrid, Spain',
    role: 'Singles',
    badge: 'Semi-Pro',
    status: 'Training',
  },
  {
    name: 'David Kim',
    rating: '5',
    sport: 'Swimming',
    location: 'Seoul, Korea',
    role: 'Freestyle',
    badge: 'Elite',
    status: 'Competing',
  },
  {
    name: 'Sarah Wilson',
    rating: '4.7',
    sport: 'Track & Field',
    location: 'London, UK',
    role: 'Sprints',
    badge: 'Professional',
    status: 'Online',
  },
];

const statusDotColor = {
  Online: 'bg-green-500',
  Training: 'bg-yellow-400',
  Competing: 'bg-blue-500',
};

const PlayerCollaboration = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-12 lg:px-24 bg-[#f9fbff]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Player <span className="text-blue-600">Collaboration</span>
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Connect with athletes worldwide and build your professional network
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {athletes.map((athlete, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border transition w-full flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <span
                className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ring-2 ring-white ${statusDotColor[athlete.status] || 'bg-gray-400'}`}
              ></span>
            </div>

            {/* Name and Rating */}
            <h3 className="text-lg font-semibold text-gray-800">{athlete.name}</h3>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              <FaStar className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-800">{athlete.rating}</span>
            </div>

            {/* Sport & Badge */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-gray-100 text-xs font-medium px-3 py-1 rounded-full text-[#525252]">{athlete.sport}</span>
              <span className="bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {athlete.badge}
              </span>
            </div>

            {/* Location & Role */}
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{athlete.location}</span>
              </div>
              <div className="text-gray-800 font-medium">{athlete.role}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 w-full mb-3">
              <button className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full font-medium transition">
                <AiOutlineUserAdd className="w-4 h-4" />
                Connect
              </button>
              <button className="p-2 border rounded-md hover:bg-gray-50 transition">
                <AiOutlineMessage className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Status */}
            <span className="text-xs text-gray-400">Status: {athlete.status}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-blue-600 hover:bg-gray-100 font-medium transition">
          Explore More Athletes
        </button>
      </div>
    </section>
  );
};

export default PlayerCollaboration;
