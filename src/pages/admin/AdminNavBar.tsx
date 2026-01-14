import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { CiMenuFries } from "react-icons/ci";
import { useState, type Dispatch, type SetStateAction } from "react";
import { TfiClose } from "react-icons/tfi";

const Links = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <ul
      className={`${
        showMenu ? "block md:hidden w-full md:w-fit text-center" : "hidden"
      } md:flex justify-between text-white`}
    >
      <li className="text-right">
        <button type="button" onClick={() => setShowMenu(false)}>
          <TfiClose className="w-5 h-5" />
        </button>
      </li>
      <li>
        <button
          className="p-3 cursor-pointer"
          onClick={() => {
            navigate("/admin");
            setShowMenu(false);
          }}
        >
          Editor
        </button>
      </li>
      <li>
        <button
          className="p-3 cursor-pointer"
          onClick={() => {
            navigate("/admin/published-posts", {
              state: { status: "published" },
            });
            setShowMenu(false);
          }}
        >
          All posts
        </button>
      </li>
      <li>
        <button
          className="p-3 cursor-pointer"
          onClick={() => {
            navigate("/admin/archived-posts", {
              state: { status: "draft" },
            });
            setShowMenu(false);
          }}
        >
          Archive
        </button>
      </li>
      <li>
        <button
          className="p-3 cursor-pointer"
          onClick={() => {
            navigate("/admin/trashed-posts");
            setShowMenu(false);
          }}
        >
          Trash
        </button>
      </li>
      <li>
        <button
          className="p-3 cursor-pointer"
          onClick={() => {
            handleLogout();
            setShowMenu(false);
          }}
        >
          Sign out
        </button>
      </li>
    </ul>
  );
};

const AdminNavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="flex justify-between p-6 bg-black text-white font-poppins fixed w-full">
      <p className={`${showMenu ? "hidden" : "block"} font-nunito`}>ADMIN</p>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className={showMenu ? "hidden" : "block md:hidden"}
      >
        <CiMenuFries className="w-6 h-6" />
      </button>

      {/* Menu bar */}
      <Links showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
};

export default AdminNavBar;
