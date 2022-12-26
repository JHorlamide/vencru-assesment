import PaymentMethod from "./PaymentMethod/PaymentMethod";
import CardDetails from "./CardDetails/CardDetails";
import BillingHistory from "./BillingHistory/BillingHistory";

const Billing = () => {
  return (
    <section className="py-5 space-y-4">
      <PaymentMethod />
      <CardDetails />
      <BillingHistory />
    </section>
  );
};

export default Billing;
