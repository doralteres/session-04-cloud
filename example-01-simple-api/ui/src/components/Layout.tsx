interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="h-5 mt-2 px-2 text-sm text-emerald-50/95 font-sans">
        Made by{" "}
        <a
          className="underline"
          href="https://linktr.ee/doralteres"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          @doralteres
        </a>
      </footer>
    </>
  );
};

export default Layout;
