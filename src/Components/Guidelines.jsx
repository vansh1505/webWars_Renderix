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
  Clock,
  FileCheck,
  GraduationCap,
  Zap,
  BookMarked,
  FileSearch,
  ScrollText,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  DollarSign,
  FileWarning,
  FileQuestion,
  Info
} from 'lucide-react';

function Guidelines() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mt-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-2xl mb-2">
            <BookMarked className="w-6 h-6 text-blue-600/80 mr-2" />
            <span className="text-blue-600 font-semibold">Conference Guidelines</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Author Guidelines</h2>
          <div class="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Authors are invited to submit original, high-quality, and previously unpublished research articles. 
            Submissions must not be under review by any other publication or conference.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions - Spans 3 columns */}
          <motion.div 
            className="col-span-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'IEEE Template',
                  icon: Download,
                  description: 'Download conference paper template',
                  action: 'Download Now',
                  link: 'https://www.ieee.org/conferences/publishing/templates.html'
                },
                {
                  title: 'Submit Paper',
                  icon: FileText,
                  description: 'Submit via Microsoft CMT',
                  action: 'Submit Paper',
                  link: 'https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025'
                },
                {
                  title: 'E-Copyright',
                  icon: FileCheck,
                  description: 'IEEE copyright process document',
                  action: 'Download',
                  link: '/ieee-copyright-process.pdf'
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Paper Format Requirements */}
          <motion.div 
            className="row-span-2 bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <FileCode className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Paper Format</h3>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Paper Size', desc: 'US Letter (8.5" x 11")' },
                { title: 'Length', desc: 'Maximum 6 pages (including figures, tables, references)' },
                { title: 'Font', desc: 'Times New Roman, 10pt, double-column layout' },
                { title: 'Top Margin', desc: '1" (25mm) on title page, 0.75" (19mm) elsewhere' },
                { title: 'Other Margins', desc: '0.75" (19mm) for left, right, and bottom' },
                { title: 'File Format', desc: 'PDF with embedded fonts, max 5MB' },
                { title: 'Page Numbers', desc: 'Do not include page numbers' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Pages & Fees */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Additional Pages</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Two additional pages allowed with extra charges:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-green-500" />
                  <span>Indian Authors: ₹1,000 per page</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-green-500" />
                  <span>International Authors: $50 per page</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Important Guidelines */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <FileWarning className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Important Notes</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Papers must be original and unpublished',
                'No simultaneous submissions allowed',
                'English language only',
                'Must follow IEEE two-column format',
                'At least one author must present'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <Info className="w-5 h-5 text-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IEEE Xplore Requirements */}
          <motion.div 
            className="col-span-2 bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <FileQuestion className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">IEEE Xplore Publication</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Papers meeting quality standards will be submitted to IEEE Xplore. Requirements:</p>
              <ul className="space-y-3">
                {[
                  'Must be presented at the conference',
                  'Authors must complete paid registration',
                  'Final paper must be IEEE Xplore-compatible',
                  'Must address all reviewer comments',
                  'No refunds for cancellations'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-purple-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Important Dates */}
          <motion.div 
            className="col-span-full bg-gray-50 rounded-2xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Key Dates</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { date: 'February 15, 2025', label: 'Paper Submission Deadline' },
                { date: 'March 1, 2025', label: 'Notification of Acceptance' },
                { date: 'March 15, 2025', label: 'Camera-ready Submission' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <p className="text-lg font-bold text-gray-900 mb-1">{item.date}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Help Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-600 mb-4">Need help with your submission?</p>
          <a 
            href="mailto:iccsai@galgotiasuniversity.edu.in"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <Link className="w-4 h-4" />
            Contact Support Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Guidelines;