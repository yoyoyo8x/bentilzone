import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { auth } from "../../config/fire";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
  const { currentUser } = useAuthValue();

  const navigate = useNavigate();
  const logout = async () => {
    const result = await signOut(auth);
    navigate("/");
  };

  return (
    <Menu as="div" className="tw-relative tw-inline-block tw-text-left">
      <div>
        <Menu.Button className=" tw-rounded-md tw-py-2 tw-text-sm tw-font-semibold tw-text-gray-900   tw-hover:bg-gray-50">
          <ChevronDownIcon
            className="tw--mr-1 tw-h-5 tw-w-5 tw-text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-36 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-focus:outline-none">
          <div className="tw-py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? " tw-text-gray-900" : "tw-text-gray-700",
                    "tw-block tw-px-4 tw-py-2 tw-text-sm"
                  )}
                >
                  {currentUser.displayName|| currentUser.email.replace(/(@[a-z0-9.-]+\.[a-z]{2,})/g, '')}
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active
                      ? "tw-bg-gray-100 tw-text-gray-900"
                      : "tw-text-gray-700",
                    "tw-block tw-px-4 tw-py-2 tw-text-sm"
                  )}
                >
                  Edit account
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "tw-bg-gray-100 tw-text-gray-900"
                      : "tw-text-gray-700",
                    "tw-block tw-w-full tw-px-4 tw-py-2 tw-text-left tw-text-sm"
                  )}
                  onClick={logout}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
