import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 bg-secondary rounded-full shrink-0" />
      <h2 className="text-xl font-heading font-black text-[#1A1A1A]">{title}</h2>
    </div>
    <div className="text-[#4A4A4A] leading-relaxed space-y-3 text-base pl-4">{children}</div>
  </motion.div>
);

const TermsAndConditions = () => (
  <div className="bg-background text-foreground overflow-x-hidden">

    {/* Hero */}
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-28 overflow-hidden rounded-b-[3rem] lg:rounded-b-[6rem] mx-2 lg:mx-8 mt-4 shadow-sm border border-black/5 bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm border border-secondary/10">
            <Scale size={28} />
          </motion.div>
          <motion.div variants={fadeUp} className="inline-block bg-secondary/10 text-secondary font-bold px-5 py-2 rounded-full mb-6 tracking-wide text-xs uppercase">
            Legal
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight tracking-tight text-[#1A1A1A]">
            Terms &amp; <span className="text-secondary italic">Conditions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#6A6A6A] text-lg max-w-xl leading-relaxed font-medium">
            By using Agenda Money's services you agree to the following terms. Please read them carefully.
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
        <motion.p variants={fadeUp} className="text-[#4A4A4A] text-lg leading-relaxed mb-12 p-6 bg-secondary/5 border border-secondary/10 rounded-2xl">
          These Terms and Conditions ("Terms") govern your access to and use of the Agenda Money ("Agenda Money", "we", "us", "our") digital lending platform, website, and mobile application. By applying for a loan or using our services, you agree to be bound by these Terms.
        </motion.p>

        <Section title="1. Eligibility">
          <p>To apply for a loan with Agenda Money, you must:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Be an individual or legal resident aged 18 years or older.</li>
            <li>Possess a valid National ID or other approved identification.</li>
            <li>Have an active mobile money account (MTN MoMo, Telecel Cash, or AT Money).</li>
            <li>Have a verifiable income source or business activity.</li>
            <li>Not be subject to any legal prohibitions on borrowing.</li>
          </ul>
        </Section>

        <Section title="2. Loan Application & Approval">
          <p>Applying for a loan does not guarantee approval. Agenda Money reserves the right to approve or decline any application at its sole discretion based on creditworthiness, internal policies, and regulatory guidelines. All information provided in the application must be accurate, complete, and truthful. Providing false information is grounds for immediate rejection or loan recall.</p>
        </Section>

        <Section title="3. Loan Terms">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Loan Amount:</strong> Available loan limits are determined by your credit profile and repayment history with Agenda Money.</li>
            <li><strong>Tenure:</strong> Loan durations vary by product and will be clearly stated in your loan agreement.</li>
            <li><strong>Interest Rate:</strong> Interest rates are disclosed upfront before you accept any loan offer. Rates are competitive and transparent.</li>
            <li><strong>Disbursement:</strong> Approved funds are disbursed directly to your registered mobile money account, typically within minutes of approval.</li>
          </ul>
        </Section>

        <Section title="4. Repayment">
          <p>You agree to repay the full loan amount plus applicable interest and fees by the due date specified in your loan agreement. Repayments are collected via mobile money on your scheduled repayment date. It is your responsibility to ensure sufficient funds are available in your mobile money wallet on the repayment date. Partial payments may not stop interest from accruing on the outstanding balance.</p>
        </Section>

        <Section title="5. Late Payment & Default">
          <p>If you fail to repay on time:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Late fees and additional interest charges may apply as outlined in your loan agreement.</li>
            <li>Your default may be reported to credit bureaus, negatively affecting your credit score.</li>
            <li>Agenda Money reserves the right to engage collection processes in accordance with applicable law.</li>
            <li>Legal action may be pursued for unresolved defaults.</li>
          </ul>
        </Section>

        <Section title="6. Early Repayment">
          <p>You may repay your loan in full before the due date. Early repayment may reduce the total interest payable.</p>
        </Section>

        <Section title="7. Fees & Charges">
          <p>All fees associated with your loan — including processing fees, interest, and any applicable late fees — will be clearly disclosed before you accept a loan offer. We do not charge hidden fees. Any changes to fee structures will be communicated in advance.</p>
        </Section>

        <Section title="8. User Obligations">
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Provide accurate and up-to-date information at all times.</li>
            <li>Notify us promptly of any changes to your contact details or financial situation.</li>
            <li>Use the loan funds for lawful purposes only.</li>
            <li>Not allow third parties to use your account or loan credentials.</li>
          </ul>
        </Section>

        <Section title="9. Intellectual Property">
          <p>All content, design, trademarks, and materials on the Agenda Money platform are the exclusive property of Agenda Money. You may not copy, reproduce, or distribute any content without our express written permission.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>To the fullest extent permitted by law, Agenda Money shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the total amount of fees paid by you in the 3 months preceding the claim.</p>
        </Section>

        <Section title="11. Governing Law">
          <p>These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be subject to the exclusive jurisdiction of the competent courts.</p>
        </Section>

        <Section title="12. Amendments">
          <p>Agenda Money reserves the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms. We will notify you of material changes via email or a notice on our platform.</p>
        </Section>

        <Section title="13. Contact Us">
          <p>For questions about these Terms, contact us:</p>
          <div className="mt-4 bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 space-y-2">
            <p><strong>Agenda Money</strong></p>
            <p>Email: <a href="mailto:support@agendamoney.com" className="text-secondary font-bold hover:underline">support@agendamoney.com</a></p>
          </div>
        </Section>
      </motion.div>
    </section>
  </div>
);

export default TermsAndConditions;
