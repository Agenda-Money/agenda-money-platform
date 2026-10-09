import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { analyticsConfigured, reopenConsent } from "@/lib/consent";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="mb-10">
    <h2 className="text-xl font-heading font-black text-[#1A1A1A] mb-4 border-l-4 border-primary pl-4">{title}</h2>
    <div className="text-[#4A4A4A] leading-relaxed space-y-3 text-base">{children}</div>
  </motion.div>
);

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-5">
    <h3 className="font-heading font-black text-[#1A1A1A] mb-2 text-base">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
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
            Last updated: October 2026
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
          This policy explains what Agenda Money Limited ("Agenda Money", "we", "us") stores on your device when you visit this website, agendamoney.com. It covers this information website only. The site has no accounts, logins or loan application portal, so there are no sign-in or session cookies. If you send us an enquiry or message through a form, see our{" "}
          <Link to="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</Link>{" "}
          for how that information is used.
        </motion.p>

        <Section title="1. What Are Cookies?">
          <p>Cookies are small text files that a website places on your device. Websites use them to remember choices and to measure how the site is used. Similar technologies, such as the local storage in your browser, work in the same way and are covered by this policy too.</p>
        </Section>

        <Section title="2. What This Website Stores">
          <div className="space-y-4 mt-2">
            <Card title="🔒 Always on: your cookie choice">
              <p>When you accept or decline analytics, we save that choice in the local storage of your browser (an item called <code>am_cookie_consent</code>) so we do not ask you again on every visit. It stays on your device, is not sent to us or anyone else, and is not used to identify or track you.</p>
            </Card>
            <Card title="📊 Only if you accept: analytics">
              <p>If you choose "Accept analytics", we load two tools that help us see which pages are used and where visitors get stuck, so we can improve the site:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics 4</strong> sets cookies such as <code>_ga</code> and <code>_ga_&lt;ID&gt;</code>, which last up to 2 years, to count visitors and page views.</li>
                <li><strong>Microsoft Clarity</strong> sets cookies such as <code>_clck</code> (up to 1 year) and <code>_clsk</code> (1 day), and records how pages are used, for example clicks, scrolling and heat maps. Microsoft may set further cookies of its own as part of this.</li>
              </ul>
              <p>Nothing is sent to Google or Microsoft, and none of these cookies are set, unless you accept. Cookie names and lifetimes are decided by those providers and can change.</p>
            </Card>
            <Card title="🚫 What we do not use">
              <p>We do not use advertising or marketing cookies, social media pixels, or live-chat or customer-support tools on this website. We do not use cookies to remember logins, languages or form contents.</p>
            </Card>
          </div>
        </Section>

        <Section title="3. Other Third Parties You Connect To">
          <p>These do not set cookies through our site, but your device does connect to them:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Google Fonts</strong> supplies the typefaces used on this site. Your browser requests them from Google each time a page loads, whether or not you have accepted analytics, so Google receives your IP address and browser details with that request.</li>
            <li><strong>WhatsApp:</strong> the WhatsApp button on this site is a plain link. Nothing is shared with WhatsApp unless you click it, and from then on the terms and privacy policy of WhatsApp apply.</li>
          </ul>
        </Section>

        <Section title="4. Managing Your Choice">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>On this site:</strong> use the banner shown on your first visit, or change your mind at any time with "Cookie Settings" in the footer
              {analyticsConfigured && (
                <>
                  {" "}(or{" "}
                  <button type="button" onClick={reopenConsent} className="text-primary font-bold hover:underline">
                    open it now
                  </button>
                  )
                </>
              )}
              . Choosing Decline stops further collection and removes the analytics cookies we can reach. You can also delete them yourself in your browser settings.
            </li>
            <li><strong>In your browser:</strong> most browsers let you view, block or delete cookies and site data in their privacy settings.</li>
            <li><strong>Google Analytics:</strong> Google also offers an <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">opt-out browser add-on</a>.</li>
          </ul>
          <p className="mt-3">Declining analytics does not affect any part of the website.</p>
        </Section>

        <Section title="5. Changes to This Policy">
          <p>If we change what this website stores, for example by adding a new tool, we will update this page and its "Last updated" date, and ask for your choice again where the law requires it.</p>
        </Section>

        <Section title="6. Contact Us">
          <p>If you have any questions about this policy, please contact:</p>
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
