import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-500 py-8 shadow-md">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-800">EGO Transit Platform</p>
          <p className="text-sm text-gray-700">Last Updated: November 11, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg bg-white p-8 shadow-md">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Welcome to EGO. We operate two applications: <strong>EGO Commuter</strong> (for passengers) and <strong>EGO Transit</strong> (for drivers and operators). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and services.
            </p>
            <p className="leading-relaxed text-gray-700">
              By using EGO services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Information We Collect</h2>
            
            <h3 className="mb-3 text-xl font-semibold text-gray-800">For EGO Commuter Users</h3>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Location Data:</strong> Real-time GPS location to show your position on the map, calculate distances to nearby stops, and provide accurate ETAs</li>
              <li><strong>Search History:</strong> Recent searches and viewed stops to improve your experience</li>
              <li><strong>Saved Places:</strong> Home, work, and favorite locations you choose to save</li>
              <li><strong>Usage Data:</strong> App interactions, features used, and trip planning activities</li>
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-800">For EGO Transit Users (Drivers/Operators)</h3>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Email, name, driver's license information, employment details</li>
              <li><strong>Franchise Information:</strong> Valid franchise number required for signup and verification</li>
              <li><strong>Real-time Location Data:</strong> Continuous GPS tracking during active trips for vehicle positioning and service monitoring</li>
              <li><strong>Vehicle Information:</strong> Plate number, route assignment, capacity, maintenance records</li>
              <li><strong>Operational Data:</strong> Trip status, passenger counts, speed, heading, journey times, performance metrics</li>
              <li><strong>Performance Analytics:</strong> On-time performance, trip counts, active hours, passenger statistics</li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-800">Information Collected Automatically</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Log data and error reports for troubleshooting</li>
              <li>Analytics data to improve app performance</li>
              <li>Network connectivity information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            <p className="mb-3 text-gray-700">We use the collected information for:</p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Service Delivery:</strong> Providing real-time transit information, route planning, and navigation</li>
              <li><strong>Real-time Tracking:</strong> Displaying live vehicle locations to commuters and monitoring driver performance</li>
              <li><strong>ETA Calculations:</strong> Using Kalman filter algorithms to provide accurate arrival predictions</li>
              <li><strong>Capacity Management:</strong> Showing vehicle load indicators (green/yellow/red/grey) to help commuters plan</li>
              <li><strong>Safety and Compliance:</strong> Ensuring driver authentication, franchise validation, and operational safety</li>
              <li><strong>Performance Analytics:</strong> Monitoring on-time performance, headway adherence, and service quality</li>
              <li><strong>Service Improvement:</strong> Analyzing usage patterns to enhance features and user experience</li>
              <li><strong>Communication:</strong> Sending service alerts, announcements, and important updates</li>
              <li><strong>Authentication:</strong> Verifying franchise numbers and maintaining secure user sessions</li>
            </ul>
          </section>

          {/* Location Data Usage */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Location Data Usage</h2>
            <p className="mb-3 text-gray-700">
              Location data is central to our service. Here's how we use it:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Commuter App:</strong> Shows your location on the map, calculates distances to stops, and improves ETA accuracy. You can control location permissions in your device settings.</li>
              <li><strong>Transit App:</strong> Continuously tracks vehicle position during active trips to provide real-time updates to commuters. This data is visible to commuters using the EGO Commuter app.</li>
              <li><strong>Background Location:</strong> The Transit app may request background location permission to maintain accurate tracking during trips.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
            <p className="mb-3 text-gray-700">We may share your information in the following circumstances:</p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Between Apps:</strong> Real-time vehicle locations from Transit app are visible in the Commuter app to provide live tracking</li>
              <li><strong>Service Providers:</strong> Third-party services like Mapbox (maps), Supabase (database), and Firebase (optional hosting)</li>
              <li><strong>Transit Agencies:</strong> Operational data shared with transit authorities for service monitoring and compliance</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
            </ul>
            <p className="mt-3 text-gray-700">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Data Storage */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Data Storage and Security</h2>
            <p className="mb-3 text-gray-700">
              Your data is stored securely using industry-standard practices:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Database:</strong> Supabase with row-level security policies</li>
              <li><strong>Authentication:</strong> Token-based secure sessions with encrypted credentials</li>
              <li><strong>Local Storage:</strong> Sensitive data protected via platform-specific secure storage (Keychain/Keystore)</li>
              <li><strong>Transport Security:</strong> All data transmitted over HTTPS/TLS</li>
              <li><strong>API Keys:</strong> Mapbox and other tokens are scoped and rotated regularly</li>
            </ul>
            <p className="mt-3 text-gray-700">
              While we implement security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
            <p className="mb-3 text-gray-700">You have the following rights:</p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Location Control:</strong> Disable location services in device settings (may limit functionality)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request your data in a structured format</li>
            </ul>
          </section>

          {/* GTFS Data */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">GTFS Data and Public Transit Information</h2>
            <p className="text-gray-700">
              EGO Commuter relies on General Transit Feed Specification (GTFS) data for routes, stops, and schedules. This public transit data is provided by transit agencies and is used to deliver accurate service information. GTFS data does not contain personal information about individual users.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">International Users</h2>
            <p className="text-gray-700">
              EGO services are based in the Philippines. If you access our services from outside the Philippines, your information may be transferred to, stored, and processed in the Philippines or other countries. By using our services, you consent to this transfer.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy in the app and updating the "Last Updated" date. Your continued use of EGO services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mb-3 text-gray-700">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="ml-6 space-y-1 text-gray-700">
              <p><strong>Email:</strong> privacy@ego-transit.com</p>
              <p><strong>Support:</strong> support@ego-transit.com</p>
              <p><strong>Address:</strong> Quezon City, Metro Manila, Philippines</p>
            </div>
          </section>

          {/* Platform-Specific Information */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Platform-Specific Permissions</h2>
            
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Android</h3>
            <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">
              <li>ACCESS_FINE_LOCATION: Precise location for accurate positioning</li>
              <li>ACCESS_COARSE_LOCATION: Approximate location for nearby stops</li>
              <li>INTERNET: Network connectivity for real-time data</li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-gray-800">iOS</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Location When In Use: Shows your location on the map</li>
              <li>Location Always: For Transit app background tracking during trips</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-600">
              © 2025 EGO Transit Platform. All rights reserved.
            </p>
            <div className="mt-3 flex justify-center space-x-4">
              <a href="/" className="text-sm text-yellow-600 hover:text-yellow-700 hover:underline">
                Home
              </a>
              <span className="text-gray-400">|</span>
              <a href="/terms" className="text-sm text-yellow-600 hover:text-yellow-700 hover:underline">
                Terms of Service
              </a>
              <span className="text-gray-400">|</span>
              <a href="/support" className="text-sm text-yellow-600 hover:text-yellow-700 hover:underline">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;