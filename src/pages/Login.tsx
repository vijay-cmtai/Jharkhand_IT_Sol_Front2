import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Added Link
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Mail, Lock, LogInIcon } from "lucide-react"; // Added icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(email, password)) {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        variant: "default",
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-8">
            <LogInIcon className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Welcome Back!
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="pl-10" // Add padding for the icon
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password" // Adjust route as needed
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="pl-10" // Add padding for the icon
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-base font-semibold"
            >
              Sign In
            </Button>
          </form>

          <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
            Not a member?{" "}
            <Link
              to="/register" // Adjust route as needed
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
