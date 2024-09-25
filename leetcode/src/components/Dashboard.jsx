import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AllQuestions from "./AllQuestions";

const Dashboard = ({ user }) => {
  let navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* Light Mode Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <span className="font-bold text-2xl text-gray-900">
                  <span className="inline-block h-3 w-3 bg-indigo-600 mr-2 rounded-full"></span>
                  CodeTracker
                </span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    All your questions in one page
                  </Link>
                  <a
                    href="https://resource-tracker.netlify.app/"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Other Resources
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={signOutUser}
                className="font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="#"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              All your questions in one page
            </Link>
            <a
              href="https://resource-tracker.netlify.app/"
              rel="noopener noreferrer"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Other Resources
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Welcome, {user?.displayName || "User"}!
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Here are your questions:
              </p>
            </div>
            <div className="border-t border-gray-200">
              <AllQuestions user={user} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ask AI Button */}
      <div className="fixed bottom-5 right-5">
        <a
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          href="https://codetracker-gpt.netlify.app/"
        >
          Ask AI
        </a>
      </div>
    </>
  );
};

export default Dashboard;
