import React from "react";

import { Tab } from "@headlessui/react";
import OrderCard from "../Components/OrderCard";
import AddressCard from "../Components/AddressCard";
import AccountCard from "../Components/AccountCard";

export default function AccountPage() {
  return (
    <Tab.Group>
      <Tab.List className="max-w-7xl mx-auto">
    
        <Tab className="w-1/3 bg-gray-200 mt-12 py-4 rounded-md ">My Orders</Tab>
        <Tab className="w-1/3 bg-gray-200 mt-12 py-4 rounded-md ">My Address</Tab>
        <Tab className="w-1/3 bg-gray-200 mt-12 py-4 rounded-md ">My Account</Tab>
      </Tab.List>
      <Tab.Panels className="max-w-7xl mx-auto">
        <Tab.Panel>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>

        </Tab.Panel>
        <Tab.Panel>
            <button className="border border-winkit-green px-4 py-2 inline-flex my-4">Add New Address</button>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>

        </Tab.Panel>
        <Tab.Panel>
            <AccountCard/>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
