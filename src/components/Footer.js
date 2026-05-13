export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <h2 className="text-white text-lg font-bold">
              Azad Afridi Cement ERP
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              Dealer management & cement distribution system for business operations.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Dashboard</li>
              <li>Dealers</li>
              <li>Records</li>
            </ul>
          </div>

          {/* SYSTEM INFO */}
          <div>
            <h3 className="text-white font-semibold mb-3">System Info</h3>
            <p className="text-sm text-gray-400">
              Version: 1.0.0
            </p>
            <p className="text-sm text-gray-400">
              Status: Operational
            </p>
            <p className="text-sm text-gray-400">
              Mode: Production UI
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Azad Afridi Cement System. All rights reserved.
          </p>

          <p>
            Built for business operations & dealer management
          </p>

        </div>

      </div>
    </footer>
  );
}