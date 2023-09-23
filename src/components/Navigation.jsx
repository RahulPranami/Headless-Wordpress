import Link from "next/link";
import "@/styles/Navigation.css";

function NavigationItem({ item }) {
  if (item.parentId) {
    return;
  }
  return (
    <>
      <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span>{item.label}</span>
      </button>
      {item?.childItems?.edges.length > 0 ? (
        <>
          <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
            <li>
              <a
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Option 2
              </a>
            </li>
            <li class="dropdown">
              <a
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Option 3 ?
              </a>
              <ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
                <li>
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Option 3-1
                  </a>
                </li>
                <li>
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Option 3-2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </>
      ) : (
        <Link href={item.uri} legacyBehavior passHref>
          {item.label}
        </Link>
      )}
    </>
  );
}

export default function Navigation({ menuItems }) {
  return (
    <>
      <div class="dropdown inline-block relative">
        {menuItems.map((item) => (
          <NavigationItem key={item.node.id} item={item.node} />
        ))}

        {/* <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>Dropdown ?</span>
        </button> */}
        {/* <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
          <li>
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Option 1
            </a>
          </li>
          <li>
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Option 2
            </a>
          </li>
          <li class="dropdown">
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Option 3 ?
            </a>
            <ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
              <li>
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Option 3-1
                </a>
              </li>
              <li>
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Option 3-2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Option 4
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
}
