import { login } from './actions'
import SubmitButton from '@/components/SubmitButton'
import { LogIn } from 'lucide-react'

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string }>
}) {
  const searchParams = await props.searchParams;
  const error = searchParams?.error;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400" />
        
        <div className="p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-4">
              <LogIn className="w-8 h-8 text-emerald-600 ml-1" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">
              Admin Access
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Greenwich-UPJ Sustainability Project
            </p>
          </div>

          <form className="space-y-6" action={login}>
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email-address" className="block text-sm font-semibold text-gray-700">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="admin@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm px-4 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 text-red-600 text-sm text-center font-medium border border-red-100">
                {error.replace(/\+/g, ' ')}
              </div>
            )}

            <div className="pt-2">
              <SubmitButton
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30"
                loadingText="Authenticating..."
                icon={<LogIn className="w-5 h-5" />}
              >
                Sign In to Dashboard
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
