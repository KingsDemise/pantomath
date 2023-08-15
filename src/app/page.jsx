import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

const page = () => {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* body */}
      <div className="flex flex-col items-center">
        <h1 className="head_text text-center">
          <span className="peach_gradient text-center"> Know Everything</span>
        </h1>
        <p className="p-5 text-center font-bold leading-[1.15]font-extrabold leading-[1.15]">
          Welcome to Pantomath
        </p>
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
