import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Users,
  Building2,
  Mail,
  Award,
  Sparkles,
  BookOpen,
  Network,
  Globe2,
  Star,
  Shield,
  Quote,
  Briefcase,
  DollarSign,
  Truck,
  Monitor,
  Camera,
  Coffee,
  Globe,
  UserCheck
} from 'lucide-react';
import { MembersData } from '../data/MembersData';

function CommitteeMembers() {
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

        <div className={`grid grid-cols-1 ${members.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'justify-center'} gap-8`}>
          {members.map((member, index) => (
            <div key={index} className="flex justify-center">
              <CommitteeCard member={member} variant={variant} />
            </div>
          ))}
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
        {renderCommitteeSection('Chief Patron', MembersData.chiefPatron, Award, 'special')}
        {renderCommitteeSection('Patrons', MembersData.patrons, Shield, 'special')}
        {renderCommitteeSection('Conference General Chair', MembersData.conferenceGeneralChair, Building2, 'special')}
        {renderCommitteeSection('Conference Chair', MembersData.conferenceChair, Users, 'special')}
        {renderCommitteeSection('Conference Organizing Chair', MembersData.conferenceOrganizingChair, Star)}
        {renderCommitteeSection('Conference Technical Chair', MembersData.conferenceTechnicalChair, BookOpen)}
        {renderCommitteeSection('Publication Chairs', MembersData.publicationChairs, BookOpen)}
        {renderCommitteeSection('Conference Organizing Co-Chairs', MembersData.conferenceOrganizingCoChairs, Users)}
        {renderCommitteeSection('Conference Technical Co-Chairs', MembersData.conferenceTechnicalCoChairs, Network)}
        {renderCommitteeSection('Conference Secretaries', MembersData.conferenceSecretaries, Mail)}
        {renderCommitteeSection('International Advisory Chair', MembersData.InternationalAdvisoryChairs, Globe)}
        {renderCommitteeSection('Publication Co-Chairs', MembersData.publicationCoChairs, BookOpen)}
        {renderCommitteeSection('Publicity Chairs', MembersData.publicityChairs, Camera)}
        {renderCommitteeSection('Sponsorship and Industry Chairs', MembersData.sponsorshipIndustryChairs, Briefcase)}
        {renderCommitteeSection('Event Organising Chairs', MembersData.eventOrganisingChair, Star)}
        {renderCommitteeSection('Finance Chairs', MembersData.financeChairs, DollarSign)}
        {renderCommitteeSection('Transport Chairs', MembersData.transportChairs, Truck)}
        {renderCommitteeSection('Website & Graphics Chairs', MembersData.websiteGraphicsChairs, Monitor)}
        {renderCommitteeSection('Media Chairs', MembersData.mediaChairs, Camera)}
        {renderCommitteeSection('Hospitality Chairs', MembersData.hospitalityChairs, Coffee)}
        {renderCommitteeSection('International Advisory Committee', MembersData.internationalAdvisoryCommittee, Globe)}
        {renderCommitteeSection('National Advisory Committee', MembersData.nationalAdvisoryCommittee, UserCheck)}
        {renderCommitteeSection('Technical Program Committee', MembersData.technicalProgramCommittee, Network)}
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
        <div className="p-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl" />
              {member.image ?
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full ring-4 ring-white"
                /> : <User className="w-24 h-24 text-blue-900" />
              }
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
      <div className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 items-center">
            {member.image ?
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full ring-4 ring-white"
              /> : <User className="w-24 h-24 text-blue-900" />
            }
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
