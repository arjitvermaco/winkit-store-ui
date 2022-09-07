import React from "react";
// import { Disclosure } from "@headlessui/react";
import AddressCard from "../Components/AddressCard";

const notificationMethods = [
  { id: "COD", title: "Cash On Delivery" },
  { id: "UPI", title: "UPI" },
  { id: "Credit / Debit Card", title: "Credit / Debit Card" },
];

export default function CheckoutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-gray-100 shadow-md p-4 flex justify-between items-center ">
        <h3>My Address</h3>

        <div className="flex space-x-4 ">
          <button className="bg-winkit-green px-4 py-2 text-white text-sm">
            Add New
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div>
        <AddressCard />
        <AddressCard />
      </div>

      <div className="bg-gray-100 shadow-md p-4 flex justify-between items-center ">
        <h3>Payment</h3>

        <div className="flex space-x-4 ">
          {/* <button className="bg-winkit-green px-4 py-2 text-white text-sm">Add New</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className="pt-12">
        <label className="text-base font-medium text-gray-900">
          How would you prefer to pay?
        </label>
        {/* <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p> */}
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {notificationMethods.map((notificationMethod) => (
              <div key={notificationMethod.id} className="flex items-center">
                <input
                  id={notificationMethod.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={notificationMethod.id === "email"}
                  className="h-4 w-4 border-gray-300 text-winkit-gree  focus:ring-winkit-green"
                />
                <label
                  htmlFor={notificationMethod.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {notificationMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <button
        type="button"
        className="inline-flex mt-6 justify-end items-center rounded border border-transparent bg-winkit-green px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-winkit-green focus:outline-none focus:ring-2 focus:ring-winkit-green focus:ring-offset-2"
      >
        Confirm Order
      </button>
    </div>
  );
}
