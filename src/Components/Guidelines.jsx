import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileCode,
  Download,
  Link,
  FileSpreadsheet,
  BookOpen,
  Sparkles,
  Clock,
  FileCheck,
  GraduationCap,
  Zap,
  BookMarked,
  FileSearch,
  ScrollText,
  Table
} from 'lucide-react';
import { fadeIn, staggerContainer, cardHover, glowVariant } from '../Utils/animation';

function Guidelines() {
  const submissionGuidelines = [
    'Papers must be written in English and should be original, unpublished work.',
    'Maximum paper length is 6 pages in IEEE double-column format.',
    'Use IEEE conference template for paper formatting.',
    'Include author names, affiliations, and contact information.',
    'Abstract should be 150-250 words.',
    'Include 4-6 keywords below the abstract.',
    'References should follow IEEE citation style.',
    'All figures and tables must be properly numbered and captioned.',
    'Equations should be numbered consecutively.',
    'Use SI units throughout the paper.'
  ];

  const formatRequirements = [
    'Font: Times New Roman',
    'Size: 10pt for main text, 24pt for paper title',
    'Margins: 1 inch all sides',
    'Column spacing: 0.25 inch',
    'Headers and footers: as per template',
    'Page numbers: bottom center',
    'Section headings: 12pt, bold',
    'Subsection headings: 10pt, bold',
    'Line spacing: single',
    'First paragraph: no indent',
    'Subsequent paragraphs: 0.25 inch indent',
    'Figure captions: 8pt, centered'
  ];

  const paperStructure = [
    'Title and Author Information',
    'Abstract and Keywords',
    'Introduction',
    'Literature Review',
    'Methodology',
    'Results and Discussion',
    'Conclusion',
    'Acknowledgments (if any)',
    'References',
    'Appendices (if any)'
  ];

  const commonMistakes = [
    'Exceeding page limit',
    'Incorrect formatting or template',
    'Missing or incomplete author information',
    'Plagiarism or self-plagiarism',
    'Poor language quality',
    'Missing or improperly formatted references',
    'Inconsistent citation style',
    'Low-quality figures or images',
    'Insufficient literature review',
    'Lack of research objectives'
  ];

  const ethicalGuidelines = [
    'Original research only - no plagiarism',
    'Proper attribution of sources',
    'No simultaneous submissions',
    'Accurate representation of results',
    'Disclosure of conflicts of interest',
    'Adherence to research ethics',
    'Protection of human subjects',
    'Data integrity and transparency',
    'Author contribution statement',
    'Funding source disclosure'
  ];

  const reviewCriteria = [
    'Technical contribution and novelty',
    'Research methodology',
    'Experimental validation',
    'Literature coverage',
    'Paper organization and clarity',
    'Technical correctness',
    'Relevance to conference themes',
    'Quality of presentation'
  ];

  const submissionProcess = [
    {
      title: 'Prepare Manuscript',
      description: 'Format your paper according to the template and guidelines',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Check Requirements',
      description: 'Ensure all formatting and content requirements are met',
      icon: FileCheck,
      color: 'green'
    },
    {
      title: 'Submit Online',
      description: 'Upload through the conference management system',
      icon: FileSpreadsheet,
      color: 'purple'
    },
    {
      title: 'Track Status',
      description: 'Monitor review progress through your dashboard',
      icon: Clock,
      color: 'orange'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            Submission Guidelines
            <Sparkles className="w-8 h-8 text-blue-600" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these comprehensive guidelines to ensure your paper meets all requirements and presents your research effectively
          </p>
        </motion.div>

        {/* Submission Process Timeline */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-blue-600" />
            Submission Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {submissionProcess.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={cardHover}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-${step.color}-500 rounded-full opacity-5 blur-3xl`}
                    variants={glowVariant}
                    initial="initial"
                    animate="animate"
                  />
                  <div className={`w-12 h-12 rounded-xl bg-${step.color}-100 flex items-center justify-center mb-4`}>
                    <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < submissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: 'Download Templates',
              icon: Download,
              description: 'Get the IEEE conference paper templates (LaTeX & Word)',
              color: 'blue',
              link: '#'
            },
            {
              title: 'Submit Paper',
              icon: FileText,
              description: 'Submit your paper through the conference management system',
              color: 'green',
              link: '#'
            },
            {
              title: 'Author Guidelines',
              icon: BookMarked,
              description: 'Detailed instructions for paper preparation and submission',
              color: 'purple',
              link: '#'
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className={`bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden border border-${item.color}-100 group-hover:border-${item.color}-200 transition-colors h-full`}>
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-${item.color}-500 rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl`}
                  variants={glowVariant}
                  initial="initial"
                  animate="animate"
                />
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Paper Structure and Format Requirements */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Paper Structure */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardHover}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Table className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Paper Structure</h3>
            </div>
            <ul className="space-y-4">
              {paperStructure.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Format Requirements */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardHover}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <FileCode className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Format Requirements</h3>
            </div>
            <ul className="space-y-4">
              {formatRequirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  {requirement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Submission Guidelines and Review Criteria */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Submission Guidelines */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardHover}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-green-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Submission Guidelines</h3>
            </div>
            <ul className="space-y-4">
              {submissionGuidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                  {guideline}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Review Criteria */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardHover}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <FileSearch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Review Criteria</h3>
            </div>
            <ul className="space-y-4">
              {reviewCriteria.map((criteria, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  {criteria}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Common Mistakes and Ethical Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Common Mistakes */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-red-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Common Mistakes to Avoid</h3>
            </div>
            <ul className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  {mistake}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ethical Guidelines */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500 rounded-full opacity-5 blur-3xl"
              variants={glowVariant}
              initial="initial"
              animate="animate"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ethical Guidelines</h3>
            </div>
            <ul className="space-y-4">
              {ethicalGuidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                  {guideline}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Resources Section */}
        <motion.div
          className="mt-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'IEEE PDF Checker', icon: FileText, color: 'blue' },
              { label: 'LaTeX Template', icon: FileCode, color: 'green' },
              { label: 'Word Template', icon: FileSpreadsheet, color: 'purple' },
              { label: 'Reference Guide', icon: BookMarked, color: 'orange' },
            ].map((resource, index) => (
              <motion.a
                key={index}
                href="#"
                className={`flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-${resource.color}-600 group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-10 h-10 rounded-lg bg-${resource.color}-100 flex items-center justify-center group-hover:bg-${resource.color}-200 transition-colors`}>
                  <resource.icon className={`w-5 h-5 text-${resource.color}-600`} />
                </div>
                {resource.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Guidelines;