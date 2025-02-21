import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { Award, Users, BookOpen, GraduationCap, Globe2, Building2, ChevronRight, Star, Play, X } from "lucide-react"

function AboutGu() {
    const [showVideo, setShowVideo] = useState(false)
    const { scrollYProgress } = useScroll()

    const stats = [
        { icon: Users, value: "35,000+", label: "Students" },
        { icon: GraduationCap, value: "2000+", label: "Faculty Members" },
        { icon: Globe2, value: "50+", label: "International Collaborations" },
        { icon: Star, value: "A+", label: "NAAC Grade" },
    ]

    const achievements = [
        "Ranked among Top 100 Universities in India",
        "NIRF Ranking 2023: Engineering (Rank Band: 151-200)",
        "ISO 9001:2015 Certified Institution",
        "UGC Approved Programs",
        "State-of-the-art Infrastructure",
    ]

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative h-[60vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-gray-900/70 mix-blend-multiply z-10" />
                    <img
                        src="/gu2.jpg"
                        alt="Galgotias University Campus"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Galgotias University</h1>
                        <p className="text-xl text-blue-100 leading-relaxed">Transforming Education, Transforming Lives</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Virtual Tour Modal */}
            {showVideo && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-4 w-full max-w-4xl relative">
                        <span className="font-semibold">Immersive 360° Virtual Tour of Galgotias University</span>
                        <button className="absolute top-2 right-2 cursor-pointer px-4 py-2 rounded-lg z-50" onClick={() => setShowVideo(false)}>
                            <X className="hover:scale-110 duration-150" />
                        </button>
                        <div className="relative h-0 pb-[56.25%] mt-3">
                            <iframe
                                src="https://www.youtube.com/embed/Vc_PU5RGDz8"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}


            {/* Stats Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-gray-900">Excellence in Education</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Galgotias University, established by the Uttar Pradesh State Legislature under Act No. 14 of 2011, is a
                                leading institution of higher education in India. Located in Greater Noida, the university is recognized
                                for its commitment to academic excellence and innovation in education.
                            </p>
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <ChevronRight className="w-5 h-5 text-blue-600 mt-1" />
                                        <p className="text-gray-600">{achievement}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
                                onClick={() => setShowVideo(true)}
                            >
                                <Play className="w-5 h-5" />
                                Take a Virtual Tour
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { icon: BookOpen, title: "Programs", desc: "200+ UG & PG Programs" },
                                { icon: Building2, title: "Campus", desc: "52-acre Smart Campus" },
                                { icon: Award, title: "Research", desc: "Cutting-edge Research Centers" },
                                { icon: Globe2, title: "Placement", desc: "100+ Fortune 500 Recruiters" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Campus Map */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto p-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Explore Our Campus</h2>
                    <div className="relative w-full h-[60vh] flex justify-center ">
                            <img
                            src="gu3d.jpg"
                            alt="Galgotias University Campus Map"
                            className="object-contain rounded-2xl border border-blue-600"
                        />
                        {[
                            { top: "30%", left: "30%", label: "Engineering Block (C-Block)" },
                            { top: "30%", left: "50%", label: "B-Block" },
                            { top: "30%", left: "70%", label: "A-Block" },
                            { top: "42%", left: "61%", label: "Cafeteria" },
                            { top: "60%", left: "50%", label: "Main Stage Arena" },
                        ].map((hotspot, index) => ( 
                            <motion.div
                                key={index}
                                className="absolute w-4 h-4 bg-blue-600 rounded-full cursor-pointer"
                                style={{ top: hotspot.top, left: hotspot.left }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-1 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap">
                                    {hotspot.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center text-blue-700 font-semibold">*Note: Images are not up to date and are for illustrative purposes only.</div>
                </div>
            </section>
        </div>
    )
}

export default AboutGu

