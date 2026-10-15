"use server";

import { SignJWT } from "jose";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is not configured");
}

const ISSUER = "movies-tracker";
const AUDIENCE = "movies-tracker-web";

export async function encryptToken(userId: string) {
  return new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setExpirationTime("2d")
    .sign(new TextEncoder().encode(jwtSecret));
}
