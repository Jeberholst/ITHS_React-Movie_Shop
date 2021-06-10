import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import authService from "../../util/auth-service";
import { userBillingInfo } from "./../../mockData/mock-data-fetcher";

const cartTotalStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 5,
    "&:hover": {
        transform: 'scale(1.01)'
    }
  },
  left: {
    width: "50%",
    alignContent: "left",
    alignItems: "left",
    textAlign: "left",
  },
  right: {
    width: "50%",
    alignContent: "right",
    alignItems: "right",
    textAlign: "right",
  },
}));

// + ' ' + userBillingInfo.lastName}/>

const CartBillingInfo = () => {
  const classes = cartTotalStyle();
  const [user] = useState(authService.getCurrentUser());
  //console.log(user)

  return user ? (
    <React.Fragment>

      <div className={classes.root}>
          
        <div className={classes.left}>
          <Label text={"Name"} />
          <Label text={"Address"} />
          <Label text={"Postal Code"} />
          <Label text={"County"} />
          <Label text={"Country"} />
        </div>

        <div className={classes.right}>
          <Label text={user.displayName ? user.displayName : "-"} />
          <Label text={user.county ? user.county : "-"} />
          <Label text={user.address ? user.address : "-"} />
          <Label text={user.postalCode ? user.postalCode : "-"} />
          <Label text={user.country ? user.country : "-"} />
        </div>

      </div>

    </React.Fragment>
  ) : null;
};

export default CartBillingInfo;

const Label = ({ text }) => {
  const classes = cartTotalStyle();

  return <div className={classes.label}>{text}</div>;
};
