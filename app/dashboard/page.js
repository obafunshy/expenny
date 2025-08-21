import Login from "@/components/Login";
import SubscriptionsDisplay from "@/components/SubscriptionsDisplay";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import SubscriptionForm from "@/components/SubscriptionForm";


export default function DashboardPage() {
    const isAuthenticated = true
    const isAddEntry = true

    if(!isAuthenticated) {
        return (
            <Login />
        )
    }

    return (
        <>
            <SubscriptionSummary />
            <SubscriptionsDisplay />
            {isAddEntry && <SubscriptionForm />}
        </>
    );
}
