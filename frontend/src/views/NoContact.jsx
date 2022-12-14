import Card from "@/components/Card";
import { routes } from "@/routes/routes";
import { NavLink } from "react-router-dom";

export default function NoContact() {
  return (
    <div className="col-md-6 mb-3 text-center">
      <Card>
        <p className="card-text">You don't have any contact</p>
        <NavLink to={routes.contacts.create} style={{ textDecoration: "none" }}>
          Add one!
        </NavLink>
      </Card>
    </div>
  );
}
