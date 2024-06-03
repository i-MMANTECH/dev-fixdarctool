"use client"
import "./globals.css";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Image className="image" src="/head_section.jpg" alt="head_section" width={1000} height={500} />
    <>
    <div className="home w-full flex bg-white justify-right align-right">Link your DApps to mobile wallet</div>
      <>
      <div className="info w-full flex bg-white justify-right align-right">Open Protocol to communicate securely between Wallets and Dapps (Web3 Apps).
        The protocol establishes a remote connection using a bridge server</div>

        <div className="w-full h-screen bg-white flex justify-center align-middle">
          <w3m-button></w3m-button>
        </div></></></>
  );
}
