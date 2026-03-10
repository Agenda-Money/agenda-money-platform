import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="mb-10">
    <h2 className="text-xl font-heading font-black text-[#1A1A1A] mb-4 border-l-4 border-primary pl-4">{title}</h2>
    <div className="text-[#4A4A4A] leading-relaxed space-y-3 text-base">{children}</div>
  </motion.div>
);

const CookiePolicy = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    {/* Hero */}
    <section className="relative pt-32 pb-16 bg-[#1A1A1A] text-white rounded-b-[4rem] lg:rounded-b-[6rem] mx-4 lg:mx-8 mt-4 overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-primary/20 text-primary font-bold px-6 py-3 rounded-full mb-6 tracking-wide text-sm uppercase">
            Legal
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight tracking-tight">
            Cookie <span className="text-primary italic">Policy</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-sm font-medium">
            Last updated: March 2025
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto max-w-3xl"
      >
        <motion.p variants={fadeUp} className="text-[#4A4A4A] text-lg leading-relaxed mb-12">
          This Cookie Policy explains how Agenda Money Limited ("Agenda Money", "we", "us", "our") uses cookies and similar tracking technologies on our website and digital platform. By using our services, you consent to our use of cookies as described in this policy.
        </motion.p>

        <Section title="1. What Are Cookies?">
          <p>Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how visitors interact with their site.</p>
        </Section>

        <Section title="2. Types of Cookies We Use">
          <div className="space-y-6 mt-2">
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-5">
              <h3 className="font-heading font-black text-[#1A1A1A] mb-2 text-base">🔒 Strictly Necessary Cookies</h3>
              <p>These cookies are essential for our website and loan application portal to function correctly. They enable core features such as secure login, session management, and fraud prevention. You cannot opt out of these cookies as they are required for service delivery.</p>
            </div>
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-5">
              <h3 className="font-heading font-black text-[#1A1A1A] mb-2 text-base">📊 Analytics Cookies</h3>
              <p>We use analytics cookies to understand how visitors interact with our platform — which pages are visited most, how long users spend on each page, and where drop-offs occur in the loan application flow. This helps us improve our user experience. We may use tools such as Google Analytics for this purpose.</p>
            </div>
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-5">
              <h3 className="font-heading font-black text-[#1A1A1A] mb-2 text-base">🎯 Functional Cookies</h3>
              <p>Functional cookies remember your preferences, such as your preferred language or saved form data, so you don't have to re-enter information every time you visit. These enhance your experience but are not strictly necessary.</p>
            </div>
            <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-5">
              <h3 className="font-heading font-black text-[#1A1A1A] mb-2 text-base">📣 Marketing Cookies</h3>
              <p>Marketing cookies may be used to show you relevant information about our loan products on other platforms or track the effectiveness of our advertising campaigns. We only use these with your consent.</p>
            </div>
          </div>
        </Section>

        <Section title="3. Third-Party Cookies">
          <p>Some cookies on our platform are set by third-party service providers who help us deliver our services, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Google Analytics</strong> — for website analytics and performance measurement.</li>
            <li><strong>Payment Processors</strong> — for secure mobile money transaction processing.</li>
            <li><strong>Customer Support Tools</strong> — for live chat and support ticket management.</li>
          </ul>
          <p className="mt-3">These third parties have their own privacy and cookie policies. We recommend reviewing them separately.</p>
        </Section>

        <Section title="4. How Long Do Cookies Last?">
          <p>Cookies can be either <strong>session cookies</strong> (deleted when you close your browser) or <strong>persistent cookies</strong> (stored on your device for a set period). Most of our analytics and functional cookies are persistent and typically expire within 12–24 months.</p>
        </Section>

        <Section title="5. Managing Your Cookie Preferences">
          <p>You can control and manage cookies in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Browser Settings:</strong> Most browsers allow you to view, block, or delete cookies through their settings (usually under "Privacy" or "Security").</li>
            <li><strong>Opt-Out Tools:</strong> For analytics cookies, you can opt out of Google Analytics by using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Google Analytics Opt-Out Browser Add-on</a>.</li>
            <li><strong>Our Cookie Banner:</strong> When you first visit our site, you will be presented with a cookie consent notice where you can accept or decline non-essential cookies.</li>
          </ul>
          <p className="mt-3">Note: disabling certain cookies may impact the functionality of our platform, particularly the loan application process.</p>
        </Section>

        <Section title="6. Changes to This Cookie Policy">
          <p>We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our services. We will notify you of significant changes by updating the "Last updated" date at the top of this page.</p>
        </Section>

        <Section title="7. Contact Us">
          <p>If you have any questions about our use of cookies, please contact:</p>
          <div className="mt-4 bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 space-y-2">
            <p><strong>Agenda Money Limited</strong></p>
            <p>Email: <a href="mailto:support@agendamoney.com" className="text-primary font-bold hover:underline">support@agendamoney.com</a></p>
            <p>Phone: <a href="tel:0558587833" className="text-primary font-bold hover:underline">0558587833</a></p>
          </div>
        </Section>
      </motion.div>
    </section>
  </div>
);

export default CookiePolicy;
