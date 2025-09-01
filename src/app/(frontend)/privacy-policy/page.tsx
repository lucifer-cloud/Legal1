import React from 'react';

export default async function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>🔐 Privacy Policy</h1>
      <h2>SkinEra Privacy Policy</h2>

      <p>
        At SkinEra, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.
      </p>

      <h3>1. Information We Collect:</h3>
      <ul>
        <li>Personal details (Name, Email, Contact Number)</li>
        <li>Appointment & treatment history</li>
        <li>Diagnostic test data (if applicable)</li>
        <li>Website usage data via cookies</li>
      </ul>

      <h3>2. How We Use Your Information:</h3>
      <ul>
        <li>To provide and improve our services</li>
        <li>To personalize your treatment plans</li>
        <li>For appointment scheduling and confirmations</li>
        <li>To send you updates and promotions (only with your consent)</li>
      </ul>

      <h3>3. Data Protection:</h3>
      <p>
        We implement strict security measures to ensure your data is protected from unauthorized access, alteration, or disclosure.
      </p>

      <h3>4. Third-Party Disclosure:</h3>
      <p>
        We do not share your information with third parties without your explicit consent, except when required by law or to support your treatment (e.g., lab partners).
      </p>

      <h3>5. Your Rights:</h3>
      <p>
        You may request access to, correction, or deletion of your personal data anytime. Contact us at <a href="mailto:privacy@skinera.in">privacy@skinera.in</a> for any privacy-related concerns.
      </p>
    </div>
  );
};

