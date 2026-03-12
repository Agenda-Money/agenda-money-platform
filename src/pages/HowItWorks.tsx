import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle, Smartphone, TrendingUp, Shield, Zap, HandCoins } from "lucide-react";
import getLoanImg from "@/assets/get-loan-opt.webp";
import customerLoanImg from "@/assets/customer-loan.webp";
import testimonyClientImg from "@/assets/testimony-client.png";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const steps = [
  { num: "01", title: "Get a Node Code", desc: (<>Connect with us using a Node code. This unique code is your passport to instant loan access.<br/><a href="/#apply" className="inline-block mt-2 text-primary font-bold underline underline-offset-2 hover:text-primary/80 transition-colors">How do I get a Node code?</a></>), icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { num: "02", title: "Quick Application", desc: "Our 100% digital process takes minutes. Just your personal details, ID card, and a selfie.", icon: Smartphone, color: "text-primary", bg: "bg-primary/10" },
  { num: "03", title: "Real-Time Review", desc: "Our intelligent engine reviews your application instantly. No paperwork, no queues, no stress.", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
  { num: "04", title: "Instant Disbursement", desc: "Funds hit your MoMo wallet (MTN, Telecel, or AT) immediately upon approval — 24/7.", icon: HandCoins, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const HowItWorks = () => (
  <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
    
    {/* REFINED LIGHT HERO */}
    <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#FAFAFA] overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem] shadow-sm border-b border-black/5 mx-2 lg:mx-8 mt-4 mb-4 lg:mb-6">
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-primary opacity-5 rounded-full blur-[60px] lg:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 text-left">
            <motion.div variants={fadeUp} className="inline-block bg-primary/10 text-primary font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full mb-6 lg:mb-8 tracking-wide text-xs lg:text-sm uppercase">
              Fast. Simple. Digital.
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 lg:mb-8 leading-[1.1] tracking-tight text-[#1A1A1A]">
              Get your money <br/>
              <span className="text-primary italic">in minutes.</span>
            </motion.h1>
            <motion.div variants={fadeUp} className="text-lg lg:text-xl text-[#6A6A6A] leading-relaxed max-w-xl mb-8 lg:mb-10 font-medium space-y-4">
              <p>We leverage the power of your social network — connections and trust lines — to bring you the financial support you deserve.</p>
              <p>We have drastically reduced the traditional banking hurdles: no branch visits, no long queues, no paperwork, no collateral — just the financial support you need, exactly when you need it.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/#apply">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 lg:px-12 py-6 lg:py-8 text-lg lg:text-xl font-bold transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 group">
                  Apply Now <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden aspect-[3/4] shadow-2xl border-8 border-white">
              <img src={getLoanImg} alt="Get a loan instantly" className="w-full h-full object-cover object-center" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating stat pill — bottom left */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 border border-black/5">
                <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="font-heading font-black text-[#1A1A1A] text-sm leading-tight">Approved in minutes</p>
                  <p className="text-[#6A6A6A] text-xs font-medium">No paperwork. No queues.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* THE JOURNEY - SPLIT LAYOUT REFINED */}
    <section className="pt-2 pb-12 lg:pt-8 lg:pb-24 bg-background relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 max-w-7xl mx-auto items-stretch">
          
          {/* Left: Immersive Image & Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            className="relative flex flex-col"
          >
            {/* Testimony card — above the image */}
            <div className="bg-[#FAFAFA] border border-black/5 rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 shadow-xl shadow-black/[0.02] relative mb-6 lg:mb-8 z-10">
              <p className="text-[#1A1A1A] text-xl md:text-2xl lg:text-3xl font-heading font-black leading-tight mb-4 lg:mb-6 italic">
                "I applied from my shop while serving customers. The cash arrived before I even finished packing their goods."
              </p>
              <div className="flex items-center gap-4">
                 <div className="bg-secondary/10 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-secondary font-bold text-xs lg:text-sm uppercase tracking-wider border border-secondary/20 font-black">
                   Financial Freedom
                 </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden flex-grow shadow-2xl group min-h-[400px] lg:min-h-[500px]">
              <img src={testimonyClientImg} alt="Agenda Money customer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: The Steps - Perfectly Aligned with Connecting Line */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="flex flex-col justify-center py-4 lg:py-8 relative mt-8 lg:mt-0">
             {/* Vertical Connecting Line - Adjusted for Mobile Visibility */}
             <div className="absolute left-[1.95rem] lg:left-[2.4rem] top-32 lg:top-40 bottom-24 w-0.1 border-l-2 border-dashed border-primary/20 -z-10 block"></div>

            <motion.div variants={fadeUp} className="mb-10 lg:mb-14">
              <h2 className="text-3xl lg:text-6xl font-heading font-black text-[#1A1A1A] mb-4 lg:mb-6 tracking-tight leading-none">
                The <span className="text-primary italic font-black">Process.</span>
              </h2>
              <p className="text-lg lg:text-xl text-[#6A6A6A] font-medium leading-relaxed max-w-lg">
                Designed for modern lives. We've removed every barrier so you can move forward with confidence.
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {steps.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className="group flex gap-6 lg:gap-10 items-start p-1 lg:p-2 hover:translate-x-2 transition-transform duration-300">
                  <div className={`${s.bg} w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] lg:rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg shadow-black/[0.03] group-hover:scale-110 transition-transform group-hover:shadow-primary/20 relative z-10 border border-black/5 bg-white`}>
                    <s.icon className={`${s.color}`} size={24} />
                  </div>
                  <div className="pt-0.5 lg:pt-1">
                    <h3 className="text-xl lg:text-2xl font-heading font-black text-[#1A1A1A] mb-1 lg:mb-2 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-base lg:text-lg text-[#6A6A6A] leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* GROWTH PATH SECTION - REFINED IMMERSIVE LIGHT THEME */}
    <section className="py-16 lg:py-32 bg-[#F8F8F8] border-y border-black/5 rounded-[3rem] lg:rounded-[6rem] mx-2 lg:mx-8 mb-8 lg:mb-20 relative overflow-hidden text-[#1A1A1A]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-primary opacity-5 rounded-full blur-[80px] lg:blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-secondary opacity-5 rounded-full blur-[60px] lg:blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none animate-pulse-slow delay-700"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-12 lg:mb-20">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black mb-6 lg:mb-8 tracking-tighter leading-[1.1] lg:leading-tight italic">
              A smarter way <br/>
              <span className="text-primary not-italic font-black">to build your future.</span>
            </h2>
            <p className="text-lg lg:text-2xl text-[#6A6A6A] font-medium max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Our automated path rewards your consistency. The more you use Agenda Money responsibly, the more benefits you unlock.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-12 mb-16 lg:mb-24 text-left">
            {[
              { title: "Higher Limits", desc: "Repay your loan on time to automatically boost your limit up to GHS 2,000.", icon: TrendingUp, accent: "bg-blue-500/10 text-blue-500", delay: 0 },
              { title: "Lower Rates", desc: "Your interest rate decreases as your credit health improves over time.", icon: Shield, accent: "bg-secondary/10 text-secondary", delay: 0.1 },
              { title: "Node Status", desc: "New to Agenda Money? Successfully close 5 loans to unlock Node status and start enjoying exclusive benefits.", icon: Users, accent: "bg-primary/10 text-primary", delay: 0.2 }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: item.delay } }
                }}
                className="bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] border border-black/5 hover:border-primary/30 transition-all group shadow-xl shadow-black/[0.01] lg:shadow-2xl hover:-translate-y-2 lg:hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Subtle Card Glow on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-14 h-14 lg:w-18 lg:h-18 rounded-[1.25rem] lg:rounded-[1.75rem] flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 transition-transform ${item.accent} shadow-xl shadow-black/[0.03] border border-black/5`}>
                  <item.icon size={24} className="lg:w-9 lg:h-9" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 tracking-tight text-[#1A1A1A]">{item.title}</h4>
                <p className="text-[#6A6A6A] text-base lg:text-xl leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            <Link to="/#apply">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-[#1A1A1A] text-white rounded-full px-10 lg:px-20 py-8 lg:py-12 text-xl lg:text-3xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group border-none">
                Start Your Journey <ArrowRight className="ml-4 lg:w-10 lg:h-10 group-hover:translate-x-3 transition-transform" size={28} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

  </div>
);

export default HowItWorks;
