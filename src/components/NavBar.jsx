import Search from "./Search";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Search />
    </nav>
  );
}
