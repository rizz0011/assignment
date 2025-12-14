export default function Sidebar() {

  const handleNavBar = () => {
    alert("This implementation is not done yet");
  }

  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <input
        type="search"
        placeholder="Search"
        aria-label="Search tasks"
      />
      <ul>
        <li onClick={handleNavBar}>Upcoming</li>
        <li onClick={handleNavBar}>Today</li>
        <li onClick={handleNavBar}>Calendar</li>
        <li onClick={handleNavBar}>Sticky Wall</li>
      </ul>

      <footer>
        <button onClick={handleNavBar}>Settings</button>
        <button onClick={handleNavBar}>Sign out</button>
      </footer>
    </aside>
  );
}
