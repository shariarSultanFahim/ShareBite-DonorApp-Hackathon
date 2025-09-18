import NextAuth from "next-auth";
import { authOptions } from "@/lib/server/options";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export { authOptions };
