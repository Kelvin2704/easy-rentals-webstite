import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
    const listings = await getFavoriteListings()
    const currentUser = await getCurrentUser();
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorites found"
                    subtitle="Looks like you have no favorite listing." />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <FavoritesClient
                currentUser={currentUser}
                listings={listings}
            />
        </ClientOnly>
    )
}

export default FavoritesPage