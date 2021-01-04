import React from "react";

export default React.memo(({ counter }) => {
    console.log("Contact rendering");
    return (
        <div>
            Contact page
            <hr />
            Counter: {counter}
        </div>
    );
});
