import { login } from "../../../lib/auth";

import LoginButton from "../../../components/LoginButton";
export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6 mx-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">welcome to NextRole</h2>
          <p className="text-gray-600">
            Sign in to your account to access your dashboard and manage your job
            postings.
          </p>
        </div>

        <div className="mt-8">
          <LoginButton login ={login} />
        </div>
        <div className="text-center text-sm text-gray-500">
          By signing in, you agree to our <a href="/terms" className="text-teal-600 hover:text-teal-500">Terms of Service</a> and <a href="/privacy" className="text-teal-600 hover:text-teal-500">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
