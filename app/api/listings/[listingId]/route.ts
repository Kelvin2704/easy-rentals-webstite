import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
interface InterfaceParams {
  listingId: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: InterfaceParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { listingId } = params;
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid user");
  }
  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing)
}
