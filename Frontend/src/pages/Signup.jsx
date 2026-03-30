import React from "react";

const Signup = () => {
  return (
    <div className="relative w-full h-screen md:h-[760px] bg-green-100 overflow-hidden">
      <div className="min-h-screen flex flex-col to-muted/20">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y">
              <h1 className="text-3xl font-bold tracking-tight text-green-600">
                Create your account
              </h1>
              <p className="text-gray-600">
                Start organizing your thoughts and ideas today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
