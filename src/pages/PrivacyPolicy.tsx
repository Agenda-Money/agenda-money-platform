import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 bg-primary rounded-full shrink-0" />
      <h2 className="text-xl font-heading font-black text-[#1A1A1A]">{title}</h2>
    </div>
    <div className="text-[#4A4A4A] leading-relaxed space-y-3 text-base pl-4">{children}</div>
  </motion.div>
);

const PrivacyPolicy = () => (
  <div className="bg-background text-foreground overflow-x-hidden">

    {/* Hero */}
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-28 overflow-hidden rounded-b-[3rem] lg:rounded-b-[6rem] mx-2 lg:mx-8 mt-4 shadow-sm border border-black/5 bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm border border-primary/10">
            <ShieldCheck size={28} />
          </motion.div>
          <motion.div variants={fadeUp} className="inline-block bg-primary/10 text-primary font-bold px-5 py-2 rounded-full mb-6 tracking-wide text-xs uppercase">
            Legal
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight tracking-tight text-[#1A1A1A]">
            Privacy <span className="text-primary italic">Policy</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#6A6A6A] text-lg max-w-xl leading-relaxed font-medium">
            We take your privacy seriously. Here's everything we collect, why we collect it, and how we keep it safe.
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
        <motion.p variants={fadeUp} className="text-[#4A4A4A] text-lg leading-relaxed mb-12 p-6 bg-primary/5 border border-primary/10 rounded-2xl">
          Agenda Money Limited ("Agenda Money", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, share, and safeguard your data when you use our digital lending platform, website, or mobile application.
        </motion.p>

        <Section title="1. Information We Collect">
          <p>We collect the following categories of personal information to assess your creditworthiness and deliver our services:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Identity Information:</strong> Full name, date of birth, national ID (Ghana Card) number, and photograph.</li>
            <li><strong>Contact Information:</strong> Phone number, email address, and residential address.</li>
            <li><strong>Financial Information:</strong> Mobile money wallet details, income information, and repayment history.</li>
            <li><strong>Device & Usage Data:</strong> IP address, device identifiers, browser type, and app usage data.</li>
            <li><strong>Transactional Data:</strong> Loan amounts, disbursement records, repayment schedules, and account balances.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>To evaluate and process your loan application.</li>
            <li>To disburse funds and collect repayments via mobile money.</li>
            <li>To verify your identity and prevent fraud.</li>
            <li>To communicate with you about your account, upcoming payments, and promotions.</li>
            <li>To comply with applicable laws, regulations, and regulatory reporting obligations (including MCAG requirements).</li>
            <li>To improve our products, services, and user experience.</li>
          </ul>
        </Section>

        <Section title="3. Legal Basis for Processing">
          <p>We process your data based on:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Contract performance:</strong> Processing necessary to provide loan services you have requested.</li>
            <li><strong>Legal obligation:</strong> Compliance with Ghanaian lending laws and MCAG regulations.</li>
            <li><strong>Legitimate interests:</strong> Fraud prevention, credit risk assessment, and service improvement.</li>
            <li><strong>Consent:</strong> Where you have expressly agreed to specific uses of your data.</li>
          </ul>
        </Section>

        <Section title="4. Sharing Your Information">
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Mobile Money Operators:</strong> MTN MoMo, Telecel Cash, and AT Money for disbursement and repayment processing.</li>
            <li><strong>Credit Bureaus:</strong> For credit reporting and identity verification, as required by law.</li>
            <li><strong>Regulatory Bodies:</strong> The Micro-Credit Association of Ghana (MCAG), Bank of Ghana, and other applicable regulators.</li>
            <li><strong>Service Providers:</strong> Trusted third-party vendors who help us operate our platform, bound by confidentiality agreements.</li>
            <li><strong>Law Enforcement:</strong> Where required by valid legal process or to protect our rights.</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. For active customers, data is retained for the duration of the lending relationship and for a minimum of 6 years thereafter, in accordance with Ghanaian financial regulations.</p>
        </Section>

        <Section title="6. Data Security">
          <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your data, subject to legal retention requirements.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:support@agendamoney.com" className="text-primary font-bold hover:underline">support@agendamoney.com</a>.</p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>Our platform may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our platform. Your continued use of our services after changes take effect constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>For any questions about this Privacy Policy or how we handle your data, please contact:</p>
          <div className="mt-4 bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 space-y-2">
            <p><strong>Agenda Money Limited</strong></p>
            <p>Email: <a href="mailto:support@agendamoney.com" className="text-primary font-bold hover:underline">support@agendamoney.com</a></p>
            <p>Registered Micro Credit Institution under the Micro-Credit Association of Ghana (MCAG)</p>
          </div>
        </Section>
      </motion.div>
    </section>
  </div>
);

export default PrivacyPolicy;
