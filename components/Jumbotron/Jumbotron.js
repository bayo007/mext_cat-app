// import Link from "next/link"
import { useRouter } from "next/router";
import React from "react";
export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumbotron p-5">
      <div className="container">
        <h1 className="display-4">Cat World</h1>
        <p className="lead">Find your next best friend</p>
        <hr className="my-4" />
        
        {/* <p className="lead">
          <Link href="/cats" role="button">
            Start Looking
          </Link>
        </p> */}
        <div className="container" style={{ placeItems:"center",cursor: "pointer" ,color:"blue", alignItems:"center", bottom:"-90px"}}
        onClick={() => {
        router.push(`/cats`);
      }}>Start looking for your cat choice</div>
        </div>
      </div>
  );
}
