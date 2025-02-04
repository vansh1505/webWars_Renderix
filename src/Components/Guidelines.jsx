import { motion } from "framer-motion"
import { FileText, Layout, AlertTriangle, Type, FileImage, Clock, Download, ExternalLink } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const bentoItems = [
  {
    title: "Paper Size",
    icon: <FileText className="h-6 w-6" />,
    content: 'US Letter (8.5" x 11")',
  },
  {
    title: "Page Limit",
    icon: <Layout className="h-6 w-6" />,
    content: "6 pages (figures, tables, references included)",
  },
  {
    title: "Additional Pages",
    icon: <AlertTriangle className="h-6 w-6" />,
    content: "₹1000 / $50 per extra page (max 2)",
  },
  {
    title: "Formatting",
    icon: <Type className="h-6 w-6" />,
    content: "Double-column, single-spaced, 10pt Times New Roman",
  },
  {
    title: "Margins",
    icon: <Layout className="h-6 w-6" />,
    content: 'Top: 1" (title page), 0.75" (elsewhere). Others: 0.75"',
  },
  {
    title: "File Format",
    icon: <FileImage className="h-6 w-6" />,
    content: "PDF, max 5MB, all fonts embedded",
  },
  {
    title: "Submission",
    icon: <Clock className="h-6 w-6" />,
    content: "Via Microsoft CMT, adhering to IEEE template",
  },
]

export default function Guidelines() {
  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6 md:p-10">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12 text-center">
        <h1 className="text-sm font-medium uppercase tracking-wider text-blue-600">Conference Guidelines</h1>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Author&apos;s Guidelines
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 lg:col-span-3"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed">
              Authors are invited to submit original, high-quality, and previously unpublished research articles.
              Submissions must not be under review by any other publication or conference. Each manuscript is limited to
              a maximum of six (6) pages, including figures, tables, and references. Additional pages may be
              accommodated with a nominal fee.
            </p>
          </div>
        </motion.div>

        {bentoItems.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600">{item.icon}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="md:col-span-2 lg:col-span-3"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Download Template
              </h3>
              <motion.a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 h-4 w-4" /> IEEE Template
              </motion.a>
            </div>
            <p className="text-gray-700">
              Use the IEEE MS Word template provided for proper formatting. Papers violating formatting guidelines may
              be rejected.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="md:col-span-2 lg:col-span-3"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Important Dates</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-semibold">Submission Deadline:</span>
                <span className="ml-2">August 15, 2023</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-semibold">Notification of Acceptance:</span>
                <span className="ml-2">September 30, 2023</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-semibold">Camera-ready Submission:</span>
                <span className="ml-2">October 15, 2023</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="md:col-span-2 lg:col-span-3"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Additional Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  IEEE Conference Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Contact Organizing Committee
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}