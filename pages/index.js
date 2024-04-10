import React, { useState, useContext, useEffect } from "react";

import {
  Header,
  Home,
  Action,
  GetPool,
  Networks,
  LiquidityHistory,
  PoolHistory,
  Promo,
  Loader,
  IconOne,
  IconTwo,
} from "../components/index";
import { CONTEXT } from "../context/index";

const index = () => {
  const { DAPP_NAME, loader, GET_POOL_ADDRESS, GET_POOL_DETAILS } =
    useContext(CONTEXT);

  //state variables
  const [activeNetwork, setActiveNetwork] = useState("");
  const [activeComponent, setActiveComponent] = useState("Home");

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"));
    setActiveNetwork(network?.name);
  }, [activeNetwork]);
  return (
    <div className="bg—slate-900">
      <Header
        setActiveComponent={setActiveComponent}
        activeNetwork={activeNetwork}
      />

      {activeComponent == "Home" ? (
        <Home
          setActiveComponent={setActiveComponent}
          GET_POOL_DETAILS={GET_POOL_DETAILS}
        />
      ) : activeComponent == "Liquidity" ? (
        <GetPool GET_POOL_ADDRESS={GET_POOL_ADDRESS} />
      ) : activeComponent == "Pool History" ? (
        <PoolHistory setActiveComponent={setActiveComponent} />
      ) : activeComponent == "Liquidity History" ? (
        <LiquidityHistory setActiveComponent={setActiveComponent} />
      ) : activeComponent == "Networks" ? (
        <Networks
          setActiveComponent={setActiveComponent}
          activeNetwork={activeNetwork}
        />
      ) : (
        ""
      )}

      <Action />
      {loader && (
        <div className="new_loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default index;
