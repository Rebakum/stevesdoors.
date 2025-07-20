const changePassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1>Change Password</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default changePassword;
