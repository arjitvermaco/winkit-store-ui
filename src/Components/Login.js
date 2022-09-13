import { useContext, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import AppContext from "../Context/AppContext";
import toast from "react-hot-toast";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function Login() {
  let [otp, setOtp] = useState("");
  let [otpSent, setOtpSent] = useState(false);
  let [phoneNo, setPhoneNo] = useState("");
  let appContext = useContext(AppContext);

  useEffect(() => {
    console.log(phoneNo);
  }, [phoneNo]);

  function handleUserLogin() {
    console.log("User Login CLickd");

    let phoneValidation = CheckIndianNumber(phoneNo);
    const appVerifier = window.recaptchaVerifier;

    if (phoneValidation) {
      signInWithPhoneNumber(auth, "+91" + phoneNo, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          // setOtpSent(true);
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
        });
    } else {
      //show toaster for invalid phone
      toast.error("Please enter a valid phone no");
    }
  }

  function CheckIndianNumber(b) {
    var a = /^\d{10}$/;
    if (a.test(b)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Dialog
      open={appContext.loginOpen}
      onClose={() => appContext.setLoginOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <div className="bg-white w-96 shadow-lg">
          <div className="flex justify-end p-3 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              onClick={() => {
                appContext.setLoginOpen(false);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="max-w-sm mx-auto text-center text-lg font-thin">
            <h2>Phone Number Verification</h2>
          </div>
          <div className="text-center text-sm mt-12">
            <h3>Enter your phone number to Login/Signup</h3>
          </div>
          <div className="px-12 py-8">
            <div className="relative mt-1  shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>

              {!otpSent ? (
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  maxlength="10"
                  className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm"
                  placeholder="9876543210"
                />
              ) : (
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  maxlength="10"
                  className="block w-full  border-gray-300 pl-10 focus:border-winkit-green focus:ring-winkit-green sm:text-sm"
                  placeholder="Enter Your OTP"
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                handleUserLogin();
              }}
              className="mt-4 w-full text-center justify-center  inline-flex items-center rounded-sm border border-transparent bg-winkit-green px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-winkit-green focus:ring-offset-2"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
