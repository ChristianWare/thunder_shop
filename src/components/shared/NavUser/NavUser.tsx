// import styles from "./NavUser.module.css";
// import User from "../../../../public/icons/user.svg";
// import Link from "next/link";
// import { auth } from "../../../../auth";

// export default async function NavUser() {
//   const session = await auth();

//   if (!session) {
//     return <button>Sign In</button>;
//   }

//   return (
//     <div className={styles.container}>
//       <Link href='/'>
//         <User className={styles.icon} />
//       </Link>
//     </div>
//   );
// }

import styles from "./NavUser.module.css";
import User from "../../../../public/icons/user.svg";
import Link from "next/link";
import { auth } from "../../../../auth";

const NavUser = async () => {
  const session = await auth();

  if (!session) {
    return <button>Sign In</button>;
  }
  return (
    <div className={styles.container}>
      <Link href='/'>
        <User className={styles.icon} />
      </Link>
    </div>
  );
};
export default NavUser;
