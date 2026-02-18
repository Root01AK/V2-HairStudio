
export const metadata = {
  title: "Terms & Conditions | V2 Hair Studio",
  description: "Read the terms and conditions governing services at V2 Hair Studio.",
};

export default function TermsPage() {
  return (
    <section className="terms-wrapper">

      {/* HEADER */}
      <div className="terms-hero">
        <p className="terms-badge">Legal Information</p>
        <h1>Terms & Conditions</h1>
        <p className="terms-sub">
          Please read these terms carefully before availing our services.
          By engaging with our clinic, you agree to the following policies.
        </p>
        <p className="terms-updated">
  Last updated: <span>15 February 2026</span>
</p>

      </div>

      {/* CONTENT */}
      <div className="terms-container">

        <div className="terms-section">
          <h2>1. Consultation & Assessment</h2>
          <p>
            All hair replacement services begin with a professional consultation.
            Recommendations are based on scalp condition, medical background,
            and suitability assessment.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Non-Surgical Procedure Disclaimer</h2>
          <p>
            Our hair replacement systems are non-surgical and cosmetic in nature.
            Results may vary depending on scalp health, lifestyle, and adherence
            to aftercare guidance.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. Payment & Refund Policy</h2>
          <p>
            All payments must be completed as agreed during consultation.
            Due to the customized nature of hair systems, refunds are not
            applicable once production has begun.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Maintenance & Aftercare</h2>
          <p>
            Clients are advised to follow prescribed maintenance schedules.
            Improper care may affect durability and appearance.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Privacy & Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding client identity,
            treatment details, and personal information.
          </p>
        </div>

        <div className="terms-footer-note">
          <p>
            For further clarification regarding these terms, please contact our
            clinic directly.
          </p>
        </div>

      </div>
    </section>
  );
}
