interface MainContainerProps {
  children: React.ReactNode;
  personImg?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  personImg,
}) => {
  return (
    <div className="pt-24 px-2 md:px-14 lg:px-32">
      <div className="w-full bg-white/90 border relative rounded-xl">
        <img
          src={personImg}
          alt="Profile pic"
          className="w-44 h-44 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-indigo-200 shadow-sm"
        />
        <div className="mt-24 pb-4">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
