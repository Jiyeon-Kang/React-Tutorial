import React from "react";
import Notification from "./Notification.jsx";

const reservedNotifications = [
    {
        id: 1,
        message: "Hi, I'll tell you today's schedule.",
    },
    {
        id: 2,
        message: "It's time to lunch time.",
    },
    {
        id: 3,
        message: "The meeting will begin soon.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        //Do not change
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                //use setState to change state
                this.setState({
                    notifications: notifications,
                });
            }
            else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;