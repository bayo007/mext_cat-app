// import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Nav() {
  
  const router = useRouter();
  return (
    <nav className="navbar navbar-dark bg-dark ">
      {/* <Link className={styles["nav-link"]} href="/">
        Navbar
      </Link> */}
      <div style={{ cursor: "pointer" ,color:"white",marginLeft:"30px"}}
        onClick={() => {
        router.push(`/`);
      }}>Home</div>

    </nav>
  );
}
