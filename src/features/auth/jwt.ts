"use server";

import { SignJWT, jwtVerify } from "jose";

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
    .setExpirationTime("15m")
    .sign(new TextEncoder().encode(jwtSecret));
}

export async function decryptToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(jwtSecret),
      { algorithms: ["HS256"] },
    );

    if (!payload.sub) {
      return null;
    }

    return {
      userId: payload.sub,
    };
  } catch {
    return null;
  }
}
