import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import authService from "../../util/auth-service";
import { fsDB as db } from '../../util/firebase';

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

const intialUserInfo = {
      address: null,
      country: null,
      county: null,
      email: null,
      firstname: null,
      lastname: null,
      postalCode: null,
}

const CartBillingInfo = () => {
  const classes = cartTotalStyle();
  const [user] = useState(authService.getCurrentUser());
  const [userInfo, setUserInfo] = useState(intialUserInfo);

  const fetchBillingInfo = () => {

      if(authService.getCurrentUser() !== null){

        db.collection("users").doc(`${user.uid}`)
            .onSnapshot((doc) => {
                
                if (doc.exists) {
                    
                    const data = doc.data()

                    setUserInfo({
                      address: data.address ? data.address : null,
                      country: data.country ? data.country : null,
                      county: data.county ? data.county : null,
                      email: data.email ? data.email : null,
                      firstname: data.firstname ? data.firstname : null,
                      lastname: data.lastname ? data.lastname : null,
                      postalCode: data.postalCode ? data.postalCode : null,
                    })

                } 

        }, (error) => {
            console.log("Error getting document, userinfo:", error);
        });

      }
  }

  useEffect(() => {
      fetchBillingInfo()
  }, [])


  return user ? (
    <React.Fragment>

      <div className={classes.root}>
          
        <div className={classes.left}>
          <Label text={"Name"} />
          <Label text={"Address"} />
          <Label text={"Postal Code"} />
          <Label text={"Email"} />
          <Label text={"Country"} />
          <Label text={"County"} />
        </div>

        <div className={classes.right}>
          <Label text={user.displayName ? user.displayName : "-"} />
          <Label text={userInfo.address ? userInfo.address : "-"} />
          <Label text={userInfo.postalCode ? userInfo.postalCode : "-"} />
          <Label text={userInfo.email ? userInfo.email : "-"} />
          <Label text={userInfo.country ? userInfo.country : "-"} />
          <Label text={userInfo.county ? userInfo.county : "-"} />
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
