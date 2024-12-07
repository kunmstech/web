import Image from "next/image";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <Link href="/">
      <Image
        alt="Kunmstech Logo"
        src="/images/logo-typography.png"
        className="w-32 h-auto"
        height={20}
        width={128}
      />
    </Link>
  );
}
