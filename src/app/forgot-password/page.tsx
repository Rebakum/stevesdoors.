const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 py-32">
      <div className="bg-white p-8 rounded  flex justify-center items-center flex-col text-gray-800 shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <p className="mb-6 text-center">
          Please enter your email address to reset your password.
        </p>
        <form className="w-full  max-w-sm">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
