const preferencePage = () => {
  return (
    <div>
      <h1>User Preferences</h1>
      <form>
        <label>
          Language:
          <select>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </label>
        <label>
          Timezone:
          <select>
            <option value="utc">UTC</option>
            <option value="est">EST</option>
            <option value="pst">PST</option>
          </select>
        </label>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default preferencePage;
