'use client';
import CompetitionCard from './Competitions';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';


const competitions = [
  {
    sport: 'Basketball',
    title: 'Summer Basketball League',
    date: 'March 15 – April 20',
    location: 'Sports Complex Arena',
    participants: '156 teams',
    prize: '$5,000',
    status: 'Open',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    sport: 'Running',
    title: 'Marathon Championship',
    date: 'April 5, 2025',
    location: 'City Center',
    participants: '2,300 runners',
    prize: '$10,000',
    status: 'Filling Fast',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    sport: 'Tennis',
    title: 'Tennis Open Tournament',
    date: 'May 10 – May 15',
    location: 'Grand Tennis Club',
    participants: '64 players',
    prize: '$7,500',
    status: 'Open',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    sport: 'Swimming',
    title: 'Swimming Championships',
    date: 'June 1 – June 3',
    location: 'Aquatic Center',
    participants: '240 swimmers',
    prize: '$15,000',
    status: 'Coming Soon',
    statusColor: 'bg-gray-100 text-gray-400',
  },
];

const Competitions = () => {
  const CompetitionCard = ({
  sport,
  title,
  date,
  location,
  participants,
  prize,
  status,
  statusColor,
}) => {
  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition w-full">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-2">
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-full text-gray-700 font-medium">{sport}</span>
        {status && (
          <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColor}`}>
            {status}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Info */}
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUsers className="text-blue-500" />
          <span>{participants}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-500" />
          <span>Prize: {prize}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">
          Register Now
        </button>
        <button className="w-full border border-gray-300 py-2 rounded-md font-medium hover:bg-gray-50 text-[#636363] transition">
          Learn More
        </button>
      </div>
    </div>
  );
};
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Upcoming <span className="text-blue-600">Competitions</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Join competitions without cost and compete with athletes at your level
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {competitions.map((comp, index) => (
          <CompetitionCard key={index} {...comp} />
        ))}
      </div>
    </section>
  );
};

export default Competitions;
