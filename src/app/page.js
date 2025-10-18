'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import { useState } from "react";
/*
function Header(){
  return (
    <>
    <center>
      <p>これがヘエト</p>
    </center>
    </>
  )
}
*/

function Footer(){
  return (
    <>
    <center>
      <p>これがフウト</p>
    </center>
    </>
  )
}

function Counter(props){
  const [count, setcount] = useState(props.initCount)
  return(
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setcount(count+1)}>Increase</button>
      <button type="button" onClick={() => setcount(count-1)}>Decrease</button>
      <button type="button" onClick={() => setcount(props.initCount)}>Reset</button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <center>
        <Counter initCount={10}/>
        <p>私の名前はカンフー</p>
      </center>
      <Footer />
    </div>
  );
}
