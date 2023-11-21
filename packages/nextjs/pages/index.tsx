import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        hello you are logged in as <Address address={address} />
      </div>
    </>
  );
};

export default Home;
