import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const DSAlert = ({ changeShow, link, children }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className="dsalert"
        variant="warning"
        onClose={() => setShow(false)}
        dismissible
      >
        {children}
        <Alert.Link onClick={() => changeShow(link)}>Click to see!</Alert.Link>
      </Alert>
    );
  }
  return "";
};

export default DSAlert;
