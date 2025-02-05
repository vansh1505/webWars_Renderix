import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building2,
  Mail,
  Award,
  Sparkles,
  GraduationCap,
  BookOpen,
  Network,
  Globe2,
  Star,
  Shield,
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Conference Committee Data
const conferenceCommittee = {
  chiefPatron: [
    {
      name: 'Shri Suneel Galgotia',
      title: 'Hon\'ble Chancellor',
      institution: 'Galgotias University, India',
      image: '/persons/sunilSir.jpeg',
      quote: 'Driving innovation through academic excellence',
      linkedin: '#'
    }
  ],
  patrons: [
    {
      name: 'Prof.(Dr.) S.N. Singh',
      title: 'Director',
      institution: 'IIITM, Gwalior, India',
      image: '/persons/snsingh.jpeg',
      quote: 'Empowering future leaders in technology'
    },
    {
      name: 'Dr. Dhruv Galgotia',
      title: 'CEO',
      institution: 'Galgotias University, India',
      image: '/persons/dhruvSir.jpeg',
      quote: 'Empowering future leaders in technology',
      linkedin: '#'
    },
    {
      name: 'Prof.(Dr.) M.K. Babu Kayala',
      title: 'VC',
      institution: 'Galgotias University, India',
      image: '/persons/vcsir.jpg',
      quote: 'Empowering future leaders in technology'
    },
    {
      name: 'Ms. Aradhana Galgotia',
      title: 'Director Operations',
      institution: 'Galgotias University, India',
      image: '/persons/aradhanaMaam.jpg',
      quote: 'Empowering future leaders in technology'
    }
  ],
  conferenceGeneralChair: [
    {
      name: 'Prof.(Dr.) Avadhesh Kumar',
      title: 'Pro-VC',
      institution: 'Galgotias University, India',
      image: '/persons/pvcsir.jpg',
      quote: 'Advancing the frontiers of computer science',
      linkedin: '#',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science']
    },
    {
      name: 'Dr. Yogesh S. Chauhan',
      title: 'Professor',
      institution: 'Indian Institute of Technology Kanpur, India',
      image: '/persons/yogesh1.png',
      quote: 'Advancing the frontiers of computer science',
      linkedin: '#',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science']
    }
  ],
  conferenceChair: [
    {
      name: 'Dr. Parma Nand',
      title: 'Professor & Head',
      department: 'Department of Computer Science & Engineering',
      institution: 'Galgotias University',
      image: '/persons/parmanand.jpg',
      quote: 'Building bridges between academia and industry',
      linkedin: '#',
      expertise: ['Computer Networks', 'Security', 'IoT']
    }
  ],
  conferenceOrganizingChair: [
    {
      name: 'Dr. Vimal Kumar',
      title: 'Professor',
      institution: 'Galgotias University',
      quote: 'Organizing events that empower innovation and research',
      linkedin: '#'
    },
    {
      name: 'Dr. Gaurav Agarwal',
      title: 'Professor',
      institution: 'Galgotias University',
      quote: 'Innovating the future through events and conferences',
      linkedin: '#'
    },
    {
      name: 'Dr. Abdul Aleem',
      title: 'Professor',
      institution: 'Galgotias University',
      quote: 'Leading with creativity and excellence in event management',
      linkedin: '#'
    }
  ],
  conferenceTechnicalChair: [
    {
      name: 'Dr. Suneeta Yadav',
      title: 'Dean, SCSE',
      institution: 'Galgotias University',
      quote: 'Technical excellence leads the way forward',
      linkedin: '#'
    },
    {
      name: 'Dr. V. Khemchandani',
      title: 'Dean, SCAT',
      institution: 'Galgotias University',
      quote: 'Shaping the future with technical excellence',
      linkedin: '#'
    },
    {
      name: 'Dr. Anurag Singh',
      title: 'Associate Professor',
      institution: 'NIT Delhi',
      quote: 'Enhancing technical research through collaboration',
      linkedin: '#'
    }
  ],
  publicationChairs: [
    {
      name: 'Prof. Shraddha Sagar',
      institution: 'Galgotias University',
      quote: 'Publications lead to groundbreaking innovations',
      linkedin: '#'
    },
    {
      name: 'Prof. Ashok K. Yadav',
      institution: 'Galgotias University',
      quote: 'Bringing research to the forefront',
      linkedin: '#'
    }
  ],
  conferenceOrganizingCoChairs: [
    {
      name: 'Prof. Meenakshi Awasthi',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Prof. Deepak Soni',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Prof. Sunil Bharti',
      institution: 'GCET, Greater Noida, India'
    }
  ],
  conferenceTechnicalCoChairs: [
    {
      name: 'Prof. Ravi Sharma',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Prof. Tarun Kumar',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Dr. Manish Kumar',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Dr. Sonu Jha',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Dr. Sunil Kumar',
      institution: 'Galgotias University, Greater Noida, India'
    }
  ],
  conferenceSecretaries: [
    {
      name: 'Dr. K. K. Agrawal',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Dr. Vipin Rai',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Prof. Arunendra Mani Tripathi',
      institution: 'Galgotias University, Greater Noida, India'
    },
    {
      name: 'Prof. Avneesh Kumar',
      institution: 'Galgotias University, Greater Noida, India'
    }
  ],
  internationalAdvisoryCommittee: [
    {
      name: 'Dr. Liudong Xing',
      institution: 'Electrical and Computer Engineering Department, University of Massachusetts, Dartmouth'
    },
    {
      name: 'Dr. LING Tok Wang',
      institution: 'Emeritus Professor, Department of Computer Science, National University of Singapore, Singapore'
    },
    {
      name: 'Dr. Norjihan Abdul Ghani',
      institution: 'HoD, Department of Information Systems, Universiti of MALAYA, Malaysia'
    }
  ],
  nationalAdvisoryCommittee: [
    {
      name: 'Prof. Adarsh Anand',
      institution: 'University Of Delhi, Delhi, India'
    },
    {
      name: 'Prof. (Dr.) Chandra Prakash',
      institution: 'National Institute of Technology, Delhi, India'
    },
    {
      name: 'Prof. (Dr.) Sahil',
      institution: 'National Institute of Technology, Delhi, India'
    }
  ]
};

function CommitteeMembers() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const scrollContainerRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderCommitteeSection = (title, members, icon, variant = "default") => {
    if (!members || members.length === 0) return null;

    const Icon = icon;

    return (
      <div className="relative mb-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-600" />
          <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Icon className="w-8 h-8 text-blue-600" />
            {title}
          </h3>
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-transparent" />
        </div>

        <div className="relative group">
          {members.length > 3 && (
            <>
              <button 
                onClick={() => handleScroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={activeSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {members.map((member, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <CommitteeCard member={member} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white mt-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            Committee Members
            <Sparkles className="w-8 h-8 text-blue-600" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distinguished academicians and researchers leading ICCSAI 2025
          </p>
        </motion.div>

        {/* Committee Sections */}
        {renderCommitteeSection('Chief Patron', conferenceCommittee.chiefPatron, Award, 'special')}
        {renderCommitteeSection('Patrons', conferenceCommittee.patrons, Shield, 'special')}
        {renderCommitteeSection('Conference General Chair', conferenceCommittee.conferenceGeneralChair, Building2, 'special')}
        {renderCommitteeSection('Conference Chair', conferenceCommittee.conferenceChair, Users, 'special')}
        {renderCommitteeSection('Conference Organizing Chair', conferenceCommittee.conferenceOrganizingChair, Star)}
        {renderCommitteeSection('Conference Technical Chair', conferenceCommittee.conferenceTechnicalChair, BookOpen)}
        {renderCommitteeSection('Publication Chairs', conferenceCommittee.publicationChairs, BookOpen)}
        {renderCommitteeSection('Conference Organizing Co-Chairs', conferenceCommittee.conferenceOrganizingCoChairs, Users)}
        {renderCommitteeSection('Conference Technical Co-Chairs', conferenceCommittee.conferenceTechnicalCoChairs, Network)}
        {renderCommitteeSection('Conference Secretaries', conferenceCommittee.conferenceSecretaries, Users)}
        {renderCommitteeSection('International Advisory Committee', conferenceCommittee.internationalAdvisoryCommittee, Globe2)}
        {renderCommitteeSection('National Advisory Committee', conferenceCommittee.nationalAdvisoryCommittee, Network)}

      </div>
    </section>
  );
}

const CommitteeCard = ({ member, variant = "default" }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  if (variant === "special") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl overflow-hidden group h-full"
      >
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl" />
              <img 
                src={member.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300'} 
                alt={member.name}
                className="w-full h-full object-cover rounded-full ring-4 ring-white"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
            <p className="text-blue-600 font-medium mb-1">{member.title}</p>
            <p className="text-sm text-gray-600 mb-3">{member.institution}</p>
            {member.quote && (
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 italic">
                <Quote className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p>{member.quote}</p>
              </div>
            )}
            {member.expertise && (
              <div className="flex flex-wrap gap-1 justify-center">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full"
    >
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4">
            <img 
              src={member.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300'} 
              alt={member.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
          {member.title && <p className="text-blue-600 font-medium mb-1">{member.title}</p>}
          <p className="text-sm text-gray-600">{member.institution}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitteeMembers;