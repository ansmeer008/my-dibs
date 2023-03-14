import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
      <style jsx>{`
        .layout {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
